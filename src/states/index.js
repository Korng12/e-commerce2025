
import axios from "axios";
import { createStore } from "vuex";

 export default createStore({
  state:{
    count:0,
    users:[],
    loading:false
  },
  mutations:{
    increment(state){
      state.count++;
    },
    decrement(state){
      state.count--;
    },
    setLoading(state,status){
      state.loading=status;
    },
    setUsers(state,users){
      state.users=users
    }
  },
  getters:{
    doubleCount:(state)=>state.count*2
  },
  actions:{
    incrementAfterDelay({commit}){
      setTimeout(()=>{
        commit('increment')
      },1000);
    },
    async fetchUser({commit}){
      commit('setLoading',true);
      await new Promise(resolve => setTimeout(resolve, 2000));
      try{
        const res=await axios.get('https://jsonplaceholder.typicode.com/users')
        const users=await res.data;
        console.log(res.data[1].name)
        console.log(users)
        commit('setUsers',users[2].name);
      }catch(err){
        console.error(err);
      }finally{
        commit('setLoading',false);
      }
      
    }
  }
 })
