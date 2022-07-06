<template>
    <Navbar />
    <div v-if="property">
      <div class="container">
      <div class="img">
      <img :src="property.image" alt="">
      </div>
      <div class="info">
        <h4><span id="heading">Address:</span><span>{{property.address.region}} <br> {{property.address.neighbourhood}} <br> {{property.address.street}} </span></h4>
        <h4><span id="heading">Price:</span><span> ${{property.price}} </span></h4>
        <h4><span id="heading">Land Size: </span><span>{{property.size}} Sqr Metre</span></h4>
        <h4><span id="heading">Rooms: </span><span>{{property.rooms.bedrooms}} Bedrooms <br> {{property.rooms.bathrooms}} Bathrooms</span></h4>
      </div>  
      </div>
          <h2>| Houses in the same area |</h2> 
      <div class="related">
      </div>
    </div>
    <div v-else>
        <p>Loading property....</p>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
  name: 'Single',
  props: ['id'],
  data(){
    return{
      property: null
    }
  },
  components:{
    Navbar
  },
    mounted(){
    fetch("http://localhost:3000/properties/" + this.id)
    .then((res)=> res.json())
    .then((data)=> (this.property = data));
  }
}
</script>

<style>
.container {
  display: flex;
  flex-flow: row;
  padding: 10px;
}
.info{
  font-size: 16px;
  width: 100%;
  align-self: center;
}

span{
  text-align: start;
  width: 35%;
}

#heading{
  text-align: end;
  width: 12%;
}

h4{
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 35px 35px 35px 35px;
  margin: 0 0 0 0;
  border: 1px solid black;
}

img{
  width: 750px;
  height: 450px;
  text-align: center;
}

h2{
  width: 35%;
  margin: auto;
  padding-bottom: 5px;
  border-bottom: 2px solid black;
}

</style>