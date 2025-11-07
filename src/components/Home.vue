<template>
  <div >
    <h1>This is home page </h1>
    <p>coun{{ count }}</p>
    <button @click="increment">Increase</button>
    <p>Price:{{ price }}</p>
    <p>quantity:{{ quantity }}</p>
    <p>Total:{{ total }}</p>
    <button @click="handleClick" ref="myBtn">Add one more</button>
  </div>
</template>

<script>
import {computed, ref} from 'vue';
export default{
  setup(){
    // reactive varible object 
    // if we want to acces actual value, use this object.value
    const count=ref(0); 
    const price=ref(100);
    const quantity=ref(1);
    const myBtn=ref(null);

    // const total =  ref(quantity.value*price.value)
    const total =  computed(()=>price.value*quantity.value)
    const increment=()=>{
      count.value++
      console.log(count.value)
      // count.value.classList.add('test')
    }
    const handleClick=()=>{
      console.log(myBtn.value)
      myBtn.value.classList.add("active")
    }
    function hello(){
      console.log("You clicked me")
    }

    const addOne=()=>{
      quantity.value++;
    }
    return{count,myBtn,increment,price,quantity,total,addOne,hello,handleClick}
  }
}

</script>

