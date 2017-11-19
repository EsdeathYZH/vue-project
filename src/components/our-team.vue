<template>
	<div id="our-team" class="container">
      <div class="text-center">
        <h1>我们的团队</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit<br>amet consectetur adipisicing elit</p>
      </div>
      <div class="row">
        <div class="col-md-4 wow fadeInUp" data-wow-offset="0" data-wow-delay="0.3s">
          <div class="text-center">
            <img src="static/img/team/1.png" alt="">
            <h2>John Doe</h2>
            <h4>Founder & CEO</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Fusce fermen tum neque a rutrum varius</p>
          </div>
        </div>
        <div class="col-md-4 wow bounceInDown" data-wow-offset="0" data-wow-delay="0.3s">
          <div class="text-center">
            <img src="static/img/team/2.png" alt="">
            <h2>John Doe</h2>
            <h4>Creative Director</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Fusce fermen tum neque a rutrum varius</p>
          </div>
        </div>
        <div class="col-md-4 wow fadeInUp" data-wow-offset="0" data-wow-delay="0.3s">
          <div class="text-center">
            <img src="static/img/team/3.png" alt="">
            <h2>John Smith</h2>
            <h4>Creative Director</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Fusce fermen tum neque a rutrum varius</p>
          </div>
        </div>
      </div>
	    <div class="row">
	      <div class="col-md-3 wow fadeInRight" data-wow-offset="0" data-wow-delay="0.3s">
	        <div class="text-center">
	          <img src="static/img/team/team1.jpg" class="img-responsive" alt="">
	          <h2>John Doe</h2>
	          <h4>Founder & CEO</h4>
	          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Fusce fermen tum neque a rutrum varius</p>
	        </div>
	      </div>
	      <div class="col-md-3 wow fadeInRight" data-wow-offset="0" data-wow-delay="0.3s">
	        <div class="text-center">
	          <img src="static/img/team/team2.jpg" class="img-responsive" alt="">
	          <h2>John Doe</h2>
	          <h4>Creative Director</h4>
	          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Fusce fermen tum neque a rutrum varius</p>
	        </div>
	      </div>
	      <div class="col-md-3 wow fadeInLeft" data-wow-offset="0" data-wow-delay="0.3s">
	        <div class="text-center">
	          <img src="static/img/team/team3.jpg" class="img-responsive" alt="">
	          <h2>John Smith</h2>
	          <h4>Creative Director</h4>
	          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Fusce fermen tum neque a rutrum varius</p>
	        </div>
	      </div>
	      <div class="col-md-3 wow fadeInLeft" data-wow-offset="0" data-wow-delay="0.3s">
	        <div class="text-center">
	          <img src="static/img/team/team4.jpg" class="img-responsive" alt="">
	          <h2>John Smith</h2>
	          <h4>Creative Director</h4>
	          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Fusce fermen tum neque a rutrum varius</p>
	        </div>
	      </div>
	    </div>
    </div>
</template>

<script>
export default {
  name: 'our-team',
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
#our-team {
	padding: 70px 30px 70px 30px;
	background:#fff;
}
#our-team h1{
	color: #000;
}
#our-team h4 {
	color:#0BA9F9;
}

#our-team .text-center {
	padding-top:20px;
	margin-bottom:30px;
	padding-bottom:10px;
}

#our-team .col-md-3 img {
	border-radius:8px;
}
</style>