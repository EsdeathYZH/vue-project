import Vue from 'vue'
import carousel from '@/components/carousel'
import homework from '@/components/homework'
import jumbotron from '@/components/jumbotron'
import major from '@/components/major'
import navbar from '@/components/navbar'
import student from '@/components/student'
import problems from '@/components/problems'
import submit from '@/components/submit'
import App from '@/App'
import silver from '@/components/problems/silver'
import copper from '@/components/problems/copper'
import gold from '@/components/problems/gold'

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

describe('problems.vue', () => {
  it('problems tabs should be correct', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('#problems ul li:nth-child(2)').textContent)
    .to.equal('白银')
  })
})

describe('problems.vue', () => {
  it('problems tabs should be correct', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('#problems #copper table tr:nth-child(2) td:nth-child(3)').textContent)
    .to.equal('青铜')
  })
})

describe('problems.vue', () => {
  it('problems tabs should be correct', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('#problems #silver'))
    .to.equal(null)
  })
})

describe('problems.vue', () => {
  it('problems click function should be correct', () => {
    const Constructor = Vue.extend(problems)
    const vm = new Constructor().$mount()
    vm.toggle("白银",silver)
    expect(vm.currentView.name)
    .to.equal("silver")
  })
})

describe('submit.vue', () => {
  it('submit sended should be correct', () => {
    const Constructor = Vue.extend(submit)
    const vm = new Constructor().$mount()
    expect(vm.sended)
    .to.equal(false)
    vm.sendmessage()
    expect(vm.sended)
    .to.equal(true)
  })
})

describe('submit.vue', () => {
  it('submit click function should be correct', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    vm.$el.querySelector('#submit .row .col-md-6:nth-child(2) button').click()
    expect(vm.$el.querySelector('#submit #submit-message  p').textContent)
    .to.equal('你的代码已提交成功！')
  })
})

describe('major.vue', () => {
  it('major should render correct contents', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector(' #major .row .col-md-3:nth-child(3) h2').textContent)
    .to.equal('云后台')
  })
})

describe('major.vue', () => {
  it('major should render correct contents', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector(' #major .row .col-md-3:nth-child(3) h2').textContent)
    .to.equal('云后台')
  })
})

