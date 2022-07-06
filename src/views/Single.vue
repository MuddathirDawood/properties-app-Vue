<template>
    <Navbar />
    <h1>Single {{$route.params.id}}</h1>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
  name: 'Single',
  components:{
    Navbar
  }
}
</script>