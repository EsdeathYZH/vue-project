// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import carousel from './components/carousel'
import homework from './components/homework'
import jumbotron from './components/jumbotron'
import major from './components/major'
import student from './components/student'
import problems from './components/problems'
import submit from './components/submit'
import navbar from './components/navbar'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})

new Vue({
	el:'#header',
	template: '<navbar/>',
	components:{navbar}
})


