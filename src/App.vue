<template>
  <div id="app">
    <navbar/>
    <jumbotron/>
    <carousel/>
    <student/>
    <problems/>
    <submit/>
    <major/>
    <homework/>
  </div>
</template>

<script>
import carousel from './components/carousel'
import jumbotron from './components/jumbotron'
import student from './components/student'
import problems from './components/problems'
import submit from './components/submit'
import major from './components/major'
import homework from './components/homework'
import navbar from './components/navbar'
export default {
  name: 'app',
  components: {
    carousel,
    jumbotron,
    student,
    problems,
    submit,
    major,
    homework,
    navbar
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
