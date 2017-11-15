<template>
  <div id="app">
    <navbar/>
    <carousel/>
    <jumbotron/>
    <student/>
    <problems/>
  </div>
</template>

<script>
import carousel from './components/carousel'
import jumbotron from './components/jumbotron'
import student from './components/student'
import problems from './components/problems'
export default {
  name: 'app',
  components: {
    carousel,
    jumbotron,
    student,
    problems
  }
}
</script>

<style>
#app {
  font-family: 'Times New Roman', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 90px;
}
</style>
