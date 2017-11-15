<template>
  <div class="container">
    <div class="sub-footer">
      <div class="row">
        <div class="col-md-3 text-center">
          <button id="join" class="btn btn-primary " @mouseover="" >报名活动</button>
        </div>
        <div class="col-md-3 text-center">
          <button id="create" class="btn btn-primary " @mouseover="createcover">发布活动</button>
        </div>
        <div class="col-md-3 text-center">
          <button id="create" class="btn btn-primary " @mouseover="createcover">发布活动</button>
        </div>
        <div class="col-md-3 text-center">
          <button id="create" class="btn btn-primary " @mouseover="createcover">发布活动</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods:{
    joincover(){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.col-md-6{
  margin:0px;
  padding:0px;
}
button{
  line-height: 40px;
  font-weight: 1.2em;
  border-radius: 0px;
  margin-top:0px;
  padding-top:0px;
}
</style>
