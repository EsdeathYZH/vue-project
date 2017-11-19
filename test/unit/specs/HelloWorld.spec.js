import Vue from 'vue'
import carousel from '@/components/carousel'
import homework from '@/components/homework'
import jumbotron from '@/components/jumbotron'
import major from '@/components/major'
import navbar from '@/components/navbar'
import student from '@/components/student'
import problems from '@/components/problems'
import team from '@/components/our-team'
import submit from '@/components/submit'
import App from '@/App'

/*describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
    .to.equal('Welcome to Your Vue.js App')
  })
})*/

describe('jumbotron.vue', () => {
  it('jumbotron should render correct contents', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.container .jumbotron h1').textContent)
    .to.equal('欢迎来到荣耀之路！')
    expect(vm.$el.querySelector('.container .jumbotron #aim').textContent)
    .to.equal('活动目的：学会自学，提升能力，成为合格的软件工程师')
    expect(vm.$el.querySelector('.container .jumbotron #summary').textContent)
    .to.equal('活动概述：学员通过考核加入后，通过自学和互助的形式完成任务获得荣耀之星，累积荣耀之星提升段位，最终获得“最强王者”称号')
  })
})

describe('carousel.vue', () => {
  it('carousel should run "goto" functions correctively', () => {
    const Constructor = Vue.extend(carousel)
    const vm = new Constructor().$mount()
    vm.goto(1);
    expect(vm.nowIndex)
    .to.equal(1)
  })
})

describe('carousel.vue', () => {
  it('prevIndex and nextIndex should be correct', () => {
    const Constructor = Vue.extend(carousel)
    const vm = new Constructor().$mount()
    vm.nowIndex=2;
    expect(vm.prevIndex)
    .to.equal(1)
    expect(vm.nextIndex)
    .to.equal(0)
  })
})

describe('student.vue', () => {
  it('students should be correct', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('#student table tbody tr:nth-child(2) td:nth-child(2)').textContent)
    .to.equal('李澄曜')
  })
})

