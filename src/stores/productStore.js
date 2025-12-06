import { defineStore } from "pinia";
import axios from 'axios'
export const useProduct=defineStore('product',{
  state:()=>({
    groups:[],
    promotions:[],
    products:[],
    categories:[]
  }),
  getters:{
    getCategoriesByGroup: (state)=>{
      return (groupName)=>state.categories.find(category=>category.group===groupName)
    },
    getProductsByGroup: (state)=>{
      return (groupName)=>{
        return state.products.filter(product=>product.group===groupName)
      }
    },
    getProductsByCategory: (state)=>{
      return (categoryId)=>{
        return state.categories.find(category=>category.id===categoryId)
      }
    },
    getPopularProducts: (state)=>{
      return state.products.filter(product=>product.countSold>10)
    }
  },
  actions:{
    async fetchProducts(){
      const res = await axios.get("http://localhost:3000/api/products");
      this.products=res.data;
    },
    async fetchPromotions(){
      const res = await axios.get("http://localhost:3000/api/promotions");
      this.promotions=res.data;
    },
    async fetchCategories(){
      const res = await axios.get("http://localhost:3000/api/categories");
      this.categories=res.data;
    },
    async fetchGroups(){
      const res = await axios.get("http://localhost:3000/api/groups");
      this.groups=res.data;
    }
  }
})
