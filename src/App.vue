<template>
  <div id="app">
    <jumbotron/>
    <carousel/>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import carousel from './components/carousel'
import jumbotron from './components/jumbotron'
export default {
  name: 'app',
  components: {
    HelloWorld,
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
