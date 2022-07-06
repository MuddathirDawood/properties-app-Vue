<template>
    <Navbar />
    <h1>Properties</h1>
    <div v-if="properties.length">
    <div class="projects-container">
        <div class="card" v-for="property of properties" :key="property.id">
            <router-link :to="{name: 'single', params: {id: property.id}}">
            <img :src="property.image" class="card-img-top" alt="...">
            <div class="card-body">
                <h5>{{property.address.region}}/ {{property.address.neighbourhood}}/ {{property.address.street}}</h5>
                <h6>${{property.price}}</h6>
                <p> Bedrooms: {{property.rooms.bedrooms}}</p>
                <p> Bathrooms: {{property.rooms.bathrooms}}</p>
                <p> Land Size: {{property.size}} Sqr Metre</p>
            </div>
            </router-link>
        </div>
    </div>
    </div>
    <div v-else>
        <p>Loading properties...</p>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
  name: 'Properties',
  components:{
    Navbar
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

.card p{
    margin-bottom: 0;
    border-radius: 0;
}

.card{
    margin-top: 50px;
    height: 475px;
    width: 20em;
    box-shadow: 15px 15px 15px rgb(33, 62, 151);
}

.card img{
    width:  20em;
    height: 250px;
}

.card a{
    text-decoration: none;
}
</style>