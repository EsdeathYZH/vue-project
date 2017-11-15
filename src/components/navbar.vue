<template>
  <nav class="navbar navbar-default navbar-fixed-top" role="banner">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="index.html"><em><strong>Glory</strong></em></a>
      </div>
      <div class="collapse navbar-collapse navbar-right">
        <ul class="nav navbar-nav">
          <li class="active"><a href="#header">首页</a></li>
          <li><a href="#feature">活动</a></li>
          <li><a href="#gallery">题库</a></li>
          <li><a href="#pricing">学员</a></li>
          <li><a href="#our-team">我们的团队</a></li>
          <li><a href="#contact">联系我们</a></li>
        </ul>
      </div>
    </div>
    <!--/.container-->
  </nav>
  <!--/nav-->
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-fixed-top .navbar-toggle .icon-bar {
  background-color: #fff;
}

.navbar>.container .navbar-brand{
  margin-left: 0;
}

.navbar-brand {
  padding: 0;
  margin:0;
}

.navbar-header a.navbar-brand {
   color:#fff;
   font-family:'Roboto';
}

.navbar-header a.navbar-brand:hover{
   color:#fff;
}

.navbar {
  border-radius: 0;
  margin-bottom: 0;
  background: #2bb8ff;
  padding: 21px 0;
  padding-bottom: 0;
}

.navbar-nav>li{
  margin-left: 20px;
  padding-bottom: 20px;
}

.navbar-fixed-top .navbar-nav > li > a {
  padding: 5px 12px;
  margin: 0;
  border-radius: 3px;
  color: #fff;
  line-height: 24px;
  display: inline-block;
  text-transform:;
  font-weight:500;
  font-size:18px;
  font-family:'Roboto';
}

.navbar-fixed-top .navbar-nav > li > a:hover{
  background: #2bb8ff;  
  color:#fff;
}

.navbar-fixed-top {
  border: none;
  background: #0BA9F9;
}

.navbar-fixed-top .navbar-brand {
  font-size: 44px;
  line-height: 30px;
  color: #fff;
}

.navbar-fixed-top .navbar-nav > .active > a,
.navbar-fixed-top .navbar-nav > .active > a:hover,
.navbar-fixed-top .navbar-nav > .active > a:focus,
.navbar-fixed-top .navbar-nav > .open > a,
.navbar-fixed-top .navbar-nav > .open > a:hover,
.navbar-fixed-top .navbar-nav > .open > a:focus {
  background-color: #2bb8ff;
  color: #fff;
}
</style>