<template>
	<div id="submit" class="container">
	    <div class="text-center">
	      <h1>提交你的代码</h1>
	      <p>在下方提交你的代码，如有问题请联系管理员</p>
	    </div>
	    <div class="row">
	      <div class="col-md-6 wow fadeInUp" data-wow-offset="0" data-wow-delay="0.4s">
	        <h2>联系信息</h2>
	        <ul>
	          <li><i class="fa fa-home fa-2x"></i>SJTU SEIEE 1-434</li>
	          <hr>
	          <li><i class="fa fa-phone fa-2x"></i>18930188571</li>
	          <hr>
	          <li><i class="fa fa-envelope fa-2x"></i>1162526220@qq.com</li>
	        </ul>
	      </div>

	      <div class="col-md-6 wow fadeInUp" data-wow-offset="0" data-wow-delay="0.6s">
	        <div id="sendmessage">Your message has been sent. Thank you!</div>
	        <div id="errormessage"></div>
	        <form action="" method="post" role="form" class="contactForm">
	          <div class="form-group">
	            <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
	            <div class="validation"></div>
	          </div>
	          <div class="form-group">
	            <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
	            <div class="validation"></div>
	          </div>
	          <div class="form-group">
	            <input type="file" class="form-control" name="file" id="file" placeholder="code"/>
	            <div class="validation"></div>
	          </div>
	          <div class="form-group">
	            <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
	            <div class="validation"></div>
	          </div>

	          <button type="submit" class="btn btn-theme">提交代码</button>
	        </form>
	      </div>
	    </div>
	</div>
</template>
<script>
export default {
  name: 'submit',
  data () {
    return {
      
    }
  },
  methods: {
  }
}
</script>

<style scoped>
#submit ul {
	list-style:none;
	margin-left:-40px;
	font-size:13px;
}
#submit h1{
  color:#000;
  padding:10px;
}

#submit h2 {
	color:#000;
	margin-bottom:30px;
	font-size:25px;
}
#submit p{
	padding-bottom: 10px;
}
.form-inline {
	margin-top:15px;
	margin-bottom:15px;	
}

.form-inline .form-group input[type="name"]{
	margin-top:10px;
	border-radius:4px;
	border-radius:6px;
}

.form-inline .form-group input[type="email"]{
	margin-top:10px;
	border-radius:6px;
	padding:5px 20px;
}
.form-inline .form-group input[type="file"]{
  margin-top:10px;
  border-radius:0px;
  padding:10px 20px 0px 10px ;
}
ul li .fa{
	padding-right: 10px;
}
</style>