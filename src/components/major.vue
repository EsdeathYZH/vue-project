<template>
    <div id="major" class="container">
      <div class="row">
        <div class="text-center">
          <h3>各部门方向</h3>
          <p>服务器、云后台、移动端、测试</p>
        </div>
        <div class="col-md-3 wow fadeInRight" data-wow-offset="0" data-wow-delay="0.3s">
          <div class="text-center">
            <div class="hi-icon-wrap hi-icon-effect">
              <i class="fa fa-laptop"></i>
              <h2>服务器</h2>
              <p>Ruby</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 wow fadeInRight" data-wow-offset="0" data-wow-delay="0.3s">
          <div class="text-center">
            <div class="hi-icon-wrap hi-icon-effect">
              <i class="fa fa-cloud"></i>
              <h2>云后台</h2>
              <p>C++、Java</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 wow fadeInLeft" data-wow-offset="0" data-wow-delay="0.3s">
          <div class="text-center">
            <div class="hi-icon-wrap hi-icon-effect">
              <i class="fa fa-android"></i>
              <h2>移动端</h2>
              <p>Android、ios</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 wow fadeInLeft" data-wow-offset="0" data-wow-delay="0.3s">
          <div class="text-center">
            <div class="hi-icon-wrap hi-icon-effect">
              <i class="fa fa-wrench"></i>
              <h2>测试</h2>
              <p>集成测试、单元测试</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'major',
  data () {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#major {
	padding-top:50px;
	background:#fff;
	padding-bottom:50px;
}

.hi-icon-effect {
	padding-bottom:30px;
	padding-left:10px;
	padding-right:10px;
}

.hi-icon-effect:hover {
	border-radius:6px;
	background:#f4f4f4;
	-webkit-transition: color 300ms, background-color 300ms;
    -moz-transition: color 300ms, background-color 300ms;
    -o-transition:  color 300ms, background-color 300ms;
    transition:  color 300ms, background-color 300ms;
}

.hi-icon-effect i.fa:hover {
	background:#fff;
	color: #0BA9F9;
	-webkit-transition: color 300ms, background-color 300ms;
    -moz-transition: color 300ms, background-color 300ms;
    -o-transition:  color 300ms, background-color 300ms;
    transition:  color 300ms, background-color 300ms;
}

.text-center i {
	font-size:30px;
	margin-top:50px;
	margin-bottom:30px;
	color:#fff;
	padding:50px;
	background:#0BA9F9;
	border-radius:50%;
}
.text-center h2 {
	margin-top:20px;
	margin-bottom:20px;
}

.text-center h3 {
	font-size:35px;
	margin-top:50px;
	margin-bottom:20px;
	color:#111;
}

.text-center p {
	margin-bottom:30px;
}
</style>