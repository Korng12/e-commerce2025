<template>
  <div class="flex flex-col my-16 gap-4">
    <div class="flex">
      <Card v-for="(category,index) in categories" :bgColor="category.bgColor" :img="category.img" :title="category.title" :quantity="category.quantity" :key="index">sd</Card>

    </div>
    <div class="flex mx-4 gap-4">
      <Section v-for="(section,index) in sections" :className="section.className" :img="section.img" :title="section.title" :bgColor="section.bgColor" :key="index"></Section>
    </div>
  </div>

 
</template>
<script>
import Card from './Card.vue';
import Section from './Section.vue';
import burger from '../assets/images/burger.png';
import peach from '../assets/images/peach.png';
import apple from '../assets/images/apple.png';
import kiwi from '../assets/images/kiwi.png';
import snack from '../assets/images/snack.png';
export default{
  components:{Card,Section},
  data(){
    return{
      categories:[
        {
          img:burger,
          title:'Cake & Milk',
          quantity:12,
          bgColor:'#F2FCE4'
        },{
          img:peach,
          title:'Peach',
          quantity:12,
          bgColor:'#FFFCEB'

        },
        {
          img:kiwi,
          title:'Oganic Kiwi',
          quantity:12,
          bgColor:'#ECFFEC'
        },
        {
          img:apple,
          title:'Red Apple',
          quantity:12,
          bgColor:'#FFF0F1'
        },
        {
          img:snack,
          title:'Snack',
          quantity:12,
          bgColor:'#F2FCE4'
        }
      ],
      sections:[
       {
         img: new URL('../assets/images/banner_images/onion.jpg', import.meta.url).href,
         title:'Everyday Fresh & Clean with Our Products',
         bgColor:'#F0E8D5',
         className:'section1'
       },
       {
          img: new URL('../assets/images/banner_images/juice.png', import.meta.url).href,
          title:'Make your Breakfast Healthy and Easy',
          bgColor:'#F3E8E8',
          className:'section2'
       },
       {
         img: new URL('../assets/images/banner_images/vegetables.jpg', import.meta.url).href,
         title:'The Best Organic Vegetables for You',
         bgColor:'#E7EAF3',
        className:'section3'
       }
      ]
      
    }
  }
}
</script>