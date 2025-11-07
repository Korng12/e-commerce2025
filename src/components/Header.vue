<template >
  <header class="">
    <!-- <div>
      <p>Heloo{{ user }} -- {{ fullName }}</p>
      <button @click="increaseNumber">Increase</button>
      <span> {{ number }}</span>
    </div>
    <div>
      <button v-on:click="displayText=!displayText">Clicke this</button>
      <p v-if="displayText">Hello</p>
      <p v-else>Hey</p>
      <button @click="toggleMesage">{{ showMessage ? "Hide" : "Show" }}</button>
      <p v-if="showMessage">I am here</p>
    </div> -->
    <div>
      <button>Add to your card</button>
      <p>quantity:{{ quatity }}</p>
      <p>price:{{ total}}</p>
      <button @click="addOne">Add one more</button>
    </div>
    <div>
      <button @click="showForm=!showForm">{{ showForm ? 'hide':'show' }}</button>
      <form v-show="showForm" action="">
        <h1>Login</h1>
        <div>
          <label for="">Username</label>
          <input type="text">
        </div>
        <div>
          <label for="">Password</label>
          <input type="password">
        </div>
      </form>
    </div>
    <ul>
      <li v-for="item in myArray" :key="item.id">{{ item.name }}</li>
    </ul>

    
  </header>
</template>
<style>
header{
  display: flex;
  flex-direction: column;
  gap:120px;
  justify-content: center;
  align-items: center;

}
div{
  display:flex;
  flex-direction: column;
}
</style>

<script >
  export default {
    data(){
      return{
        user: "Meng kong",
        showMessage: true,
        displayText:false,
        firstName:'hello',
        lastName:'iam',
        number:1,
        price:120,
        quatity:1,
        showForm:false,
        myArray: [
        { id: 1, name: 'Item A' },
        { id: 2, name: 'Item B' },
        { id: 3, name: 'Item C' }
      ]

      }
    },
    methods: {
     toggleMesage(){
       this.showMessage=!this.showMessage
     },
     increaseNumber(){
      this.number=++this.number;
     },
     addOne(){
      this.quatity++;
     }
    },
    computed:{
      fullName(){
        return this.firstName+this.lastName;
      },
      total(){
        return this.quatity*this.price;
      }
    }
  }
</script>