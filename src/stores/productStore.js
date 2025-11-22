import { defineStore } from "pinia";
import { Promotion } from "../../simple_backend/dist/promotion/entities/promotion.entity";
const useProductStore= defineStore("product",{
  state: ()=>({
    groups:[],
    promotions:[],
    categories:[],
    products:[]

  }),
  getters:{


  },
  actions:{

  }
})