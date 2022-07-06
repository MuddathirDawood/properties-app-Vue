<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/properties">Properties</router-link> |
    <router-link to="/admin">Admin</router-link>
  </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style>

nav {
  padding: 30px;
  border-bottom: #2c3e50 solid 2px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>