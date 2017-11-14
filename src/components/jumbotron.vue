<template>
  <div class="container">
    <div class="jumbotron">
      <h1 class="text-center">{{welcome}}</h1>
      <h3>想成为编程大神吗？和我们一起完成任务、提升等级，踏上荣耀之路吧！</h3> 
      <p class="text-left text-mute"><em>活动目的</em>：学会自学，提升能力，成为合格的软件工程师</p>
      <p class="text-left"><em>活动概述</em>：学员通过考核加入后，通过自学和互助的形式完成任务获得荣耀之星，累积荣耀之星提升段位，最终获得“最强王者”称号</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jumbotron',
  data () {
    return {
      welcome: '欢迎来到荣耀之路！'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<link rel="stylesheet" href="static/css/bootstrap.min.css">
<style scoped>
p{
  line-height: 20px;
}
</style>
