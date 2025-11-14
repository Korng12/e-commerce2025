<template>
  <div>
    <ul>
    <li v-for="(user,index) in users" :key="index">{{ user.name }}</li>
  </ul>
    <input ref="myInput" v-model="message" type="text">
    <button @click="focusInput">Click me</button>
    <p>You typed:{{ message }}</p>
    <p>count{{ counter.count }}</p>
    <button @click="counter.increment()">Increment</button>
  </div>
  
 
</template>

<script>
import { useCounterStore } from './states/counter';
export default {
  data() {
    return {
      imageUrl: 'https://picsum.photos/400/300',
      users:[],
      message:'',
      counter: useCounterStore()
    };
  },
  methods: {
    focusInput(){
      this.$refs.myInput.focus();
    },
    async fetchUsers(){
      const res= await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json();
      console.log(data);
      this.users=data;
    },
    getNewImage() {
      // Add random query to force reload
      this.imageUrl = `https://picsum.photos/400/300?random=${Math.floor(Math.random() * 1000)}`;
    },
  },
  mounted(){
    this.fetchUsers();
  } 
};
</script>

