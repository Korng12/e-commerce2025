<template>

  <div class="flex flex-col">
    <!-- <button @click="$store.dispatch('fetchUser')">Load users</button>
    <p v-if="$store.state.loading">Loading...</p>
    <p v-else>{{ $store.state.users}}</p> -->
    <!-- <p>This is pina count:{{ store.count }}</p> -->
  </div>
  
 
</template>

<script>
export default {
  data() {
    return {
      imageUrl: 'https://picsum.photos/400/300',
      users:[],
      message:'',
      // counter: useCounterStore()
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
    increment(){
      this.$store.commit('increment');
      console.log(this.$store.state.count);
    }
  },
  // mounted(){
  //   this.fetchUsers();
  // } 
};
</script>

