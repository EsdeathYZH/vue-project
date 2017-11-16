<template>
    <div id="homework" class="container">
      <div class="text-center">
        <h1>优秀作品展示</h1>
        <p>查看其他人的代码有助于你的提高</p>
      </div>
		<div class="row">
		<figure>
		  <div class="col-md-3 wow fadeInUp" data-wow-offset="0" data-wow-delay="0.3s">
		    <a href="static/mg/work/1.jpg">
			<img src="static/img/work/1.jpg" class="img-responsive" alt="">
			</a>
		  </div>
		</figure>
		<figure >
		  <div class="col-md-3 wow fadeInUp" data-wow-offset="0" data-wow-delay="0.3s">
		    <a href="static/img/work/2.jpg">
			<img src="static/img/work/2.jpg" class="img-responsive" alt="">
			</a>
		  </div>
		</figure>
		<figure >
		  <div class="col-md-3 wow fadeInDown" data-wow-offset="0" data-wow-delay="0.3s">
		    <a href="static/img/work/3.jpg">
			<img src="static/img/work/3.jpg" class="img-responsive" alt="">
			</a>
		  </div>
		</figure>
		<figure >
		  <div class="col-md-3 wow fadeInDown" data-wow-offset="0" data-wow-delay="0.3s">
		    <a href="static/img/work/4.jpg">
			<img src="static/img/work/4.jpg" class="img-responsive" alt="">
			</a>
		  </div>
		</figure>
		</div>
	    <div class="row">
	      <figure >
	        <div class="col-md-3 wow fadeInUp" data-wow-offset="0" data-wow-delay="0.3s">
	          <a href="static/img/work/5.jpg">
				<img src="static/img/work/5.jpg" class="img-responsive" alt="">
			  </a>
	        </div>
	      </figure>
	      <figure >
	        <div class="col-md-3 wow fadeInUp" data-wow-offset="0" data-wow-delay="0.3s">
	          <a href="static/img/work/6.jpg" ">
			  <img src="static/img/work/6.jpg" class="img-responsive" alt="">
			  </a>
	        </div>
	      </figure>
	      <figure >
	        <div class="col-md-3 wow fadeInDown" data-wow-offset="0" data-wow-delay="0.3s">
	          <a href="static/img/work/7.jpg" >
				<img src="static/img/work/7.jpg" class="img-responsive" alt="">
			  </a>
	        </div>
	      </figure>
	      <figure >
	        <div class="col-md-3 wow fadeInDown" data-wow-offset="0" data-wow-delay="0.3s">
	          <a href="static/img/work/8.jpg" >
				<img src="static/img/work/8.jpg" class="img-responsive" alt="">
			  </a>
	        </div>
	      </figure>
	    </div>
    </div>
</template>

<script>
export default {
  name: 'homework',
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
#homework{
  padding-top:50px;
  padding-bottom: 20px;
}
h1{
  color:#000;
  padding:10px;
}
.row{
	padding-top: 40px;
}
figure .col-md-3 a img {
	border-radius: 10px;
}
figure .col-md-3 a img:hover{
	opacity: 0.5;
	padding:30px;
	-webkit-transition: color 300ms, background-color 300ms ,padding 300ms;
    -moz-transition: color 300ms, background-color 300ms ,padding 300ms;
    -o-transition:  color 300ms, background-color 300ms ,padding 300ms;
    transition:  color 300ms, background-color 300ms ,padding 300ms;
}
</style>