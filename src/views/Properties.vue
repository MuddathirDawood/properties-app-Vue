<template>
    <Navbar />
    <h1>Properties</h1>
    <div v-if="properties.length">
    <div class="projects-container">
        <Card />
    </div>
    </div>
    <div v-else>
        <p>Loading properties...</p>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import Card from '../components/PropertyCard.vue'

export default {
  name: 'Properties',
  components:{
    Navbar, Card
  },
  data(){
    return{
        properties:[]
    }
  },
  mounted(){
    fetch("http://localhost:3000/properties")
    .then((res)=> res.json())
    .then((data)=> (this.properties = data));
  }
}
</script>

<style>
.projects-container{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 25px;
    margin: 35px 35px 35px 35px;
}
</style>