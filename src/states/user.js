import { defineStore } from "pinia";
export const useUserStore=defineStore('user',{
  state:()=>({
    user:null,
    loading:false,
    count:0
  }),
  actions:{
    increment(){
      this.count++
    }
  }
})