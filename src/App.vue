<template>
  <div id="app">
    <navbar/>
    <jumbotron/>
    <carousel/>
    <activity/>
  </div>
</template>

<script>
import activity from './components/activity'
import carousel from './components/carousel'
import jumbotron from './components/jumbotron'
export default {
  name: 'app',
  components: {
    activity,
    carousel,
    jumbotron
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
  padding-top: 90px;
}
</style>
