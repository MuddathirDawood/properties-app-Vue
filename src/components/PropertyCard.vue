<template>
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
</template>

<script>
export default {
    name: 'PropertyCard',
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