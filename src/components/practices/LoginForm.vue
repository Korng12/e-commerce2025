<template>
  <div class="flex m-16 ">
    <form @submit.prevent="handleLogin" action="" class="flex flex-col gap-4">
      
      <div class="flex flex-col">
        <label for="">Name</label>
        <input v-model="name" type="text" placeholder="enter your name" class="border">
      </div>
      <div class="flex flex-col">
        <label for="">Password</label>
        <input v-model="password" type="text" placeholder="enter your password" class="border">
      </div>
      <button class="w-36 border bg-green-500">Login</button>

    </form>
  </div>

</template>
<script>
import axios from 'axios';
export default{
  data(){
    return{
      name:'',
      password: ''
    }
   
  },
  methods:{
    async handleLogin(){
      console.log("Login with ",this.name,this.password);
      try{
        const res= await axios.post('http://localhost:3000/login',{
         name:this.name,password:this.password
        })
        localStorage.setItem("accessToken",res.data.accessToken)
        // if(res===ok){
        //   // this.$router.push('/about');
        // }
        console.log(res.data.accessToken)
        this.$router.push('/profile');
      }catch(err){
        console.log(err.response.data.message)
      }

    }
  }

}
</script>