<template>
  <div id="app">
    <!-- <Home/> -->
    <pagination/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import pagination from './components/pagination'

export default {
  name: 'app',
  components: {
    Home,
    pagination

  } 
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
