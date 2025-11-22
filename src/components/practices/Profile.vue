<template>
  <div>
    <p>Hello this is your profile page</p>
    <p>{{ user }}</p>
    <p>{{ role }}</p>
  </div>

</template>
<script>
import axios from 'axios'
export default{
 async created(){
    await this.fetchUser();
  },
  data(){
    return{
      user:'',
      role:''
    }
  },
  methods:{
   async fetchUser() {
  const accessToken = localStorage.getItem('accessToken');
  console.log("Token:", accessToken);

  if (!accessToken) {
    console.warn("No access token found");
    this.$router.push('/login');
    return;
  }

  try {
    const res = await axios.get("http://localhost:3000/profile", {
      headers: { Authorization: 'Bearer ' + accessToken }
    });

    console.log("Response data:", res.data);
    this.user = res.data.user.name;
    this.role = res.data.user.role;

  } catch(err) {
    console.error(err.response?.data?.message || err.message);
    if(err.response?.status === 403 || err.response?.status === 401){
      this.$router.push('/login'); // redirect if token invalid/expired
    }
  }
}

  }
}
</script>