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

describe('jumbotron.vue', () => {
  it('jumbotron should render correct contents', () => {
    const Constructor = Vue.extend(jumbotron)
    const vm = new Constructor().$mount()
    expect(vm.welcome)
    .to.equal('欢迎来到荣耀之路！')
    expect(vm.aim)
    .to.equal('活动目的：学会自学，提升能力，成为合格的软件工程师')
    expect(vm.summary)
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

describe('carousel.vue', () => {
  it('clearInv function should be correct', () => {
    const Constructor = Vue.extend(carousel)
    const vm = new Constructor().$mount()
    expect(vm.invId)
    .to.equal(8)
    vm.clearInv()
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

describe('student.vue', () => {
  it('student insert&delete should be correct', () => {
    const Constructor = Vue.extend(student)
    const vm = new Constructor().$mount()
    expect(vm.users.length)
    .to.equal(3)
    vm.remove(0)
    expect(vm.users.length)
    .to.equal(2)
    expect(vm.users[0].name)
    .to.equal('李澄曜')
    vm.insert()
    expect(vm.users.length)
    .to.equal(3)
  })
})

describe('gold.vue', () => {
  it('problem-silver insert&delete should be correct', () => {
    const Constructor = Vue.extend(gold)
    const vm = new Constructor().$mount()
    expect(vm.problems.length)
    .to.equal(3)
    vm.remove(0)
    expect(vm.problems.length)
    .to.equal(2)
    expect(vm.problems[0].content)
    .to.equal('2、请按照图中标注在提供的空react工程中实现一个日历控件，语言使用typescript。仅可以使用react全家桶，不允许使用任何其他框架（比如jQuery、Bootstrap等）。')
    vm.insert()
    expect(vm.problems.length)
    .to.equal(3)
  })
})

describe('silver.vue', () => {
  it('problem-silver insert&delete should be correct', () => {
    const Constructor = Vue.extend(silver)
    const vm = new Constructor().$mount()
    expect(vm.problems.length)
    .to.equal(3)
    vm.remove(0)
    expect(vm.problems.length)
    .to.equal(2)
    expect(vm.problems[0].content)
    .to.equal('2、仅使用html和css实现类似图中的留言簿，仅需要实现基本样式，不需要实现功能。')
    vm.insert()
    expect(vm.problems.length)
    .to.equal(3)
  })
})

describe('copper.vue', () => {
  it('problem-copper insert&delete should be correct', () => {
    const Constructor = Vue.extend(copper)
    const vm = new Constructor().$mount()
    expect(vm.problems.length)
    .to.equal(3)
    vm.remove(0)
    expect(vm.problems.length)
    .to.equal(2)
    expect(vm.problems[0].content)
    .to.equal('斐波那契数列指的是类似于以下的数列：1, 1, 2, 3, 5, 8, 13, ….第 n 个数由数列的前两个相加而来：fibonacci(n) = fibonacci(n - 1) + fibonacci(n -2)请使用typescript完成fibonacci函数，该函数接收一个数字n为参数，可以获取该数列中的第n个数字。例如，fibonacci(0)=1，fibonacci(1)=1，fibonacci(2)=2，fibonacci(3)=3')
    vm.insert()
    expect(vm.problems.length)
    .to.equal(3)
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
    expect(vm.$el.querySelector('#problems ul li:nth-child(1)').textContent)
    .to.equal("青铜")
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

describe('homework.vue', () => {
  it('homework slides should render correct contents', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector(' #homework .row figure:nth-child(2) div a').href)
    .to.equal('http://localhost:9876/static/img/work/2.jpg')
  })
})


