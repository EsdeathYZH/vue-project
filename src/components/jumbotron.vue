<template>
  <div class="container">
    <div class="jumbotron">
      <h1 class="text-center">{{welcome}}</h1>
      <h3>想成为编程大神吗？和我们一起完成任务、提升等级，踏上荣耀之路吧！</h3> 
      <div id="instruction">
        <div id="aim" class="text-left">{{aim}}</div>
        <div id="summary" class="text-left">{{summary}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'jumbotron',
  data () {
    return {
      welcome: '欢迎来到荣耀之路！',
      aim:'活动目的：学会自学，提升能力，成为合格的软件工程师',
      summary:'活动概述：学员通过考核加入后，通过自学和互助的形式完成任务获得荣耀之星，累积荣耀之星提升段位，最终获得“最强王者”称号'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
}
#instruction{
  padding-left: 150px;
  padding-right: 150px;
  font-size: 18px;
  color: #8E8E8E;
  line-height: 30px;
}

</style>
