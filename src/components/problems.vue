<template>
 <div id="problems" class="container">
	 <div id="student-title"class="text-center">
	        <h1>题库</h1>
	        <p>学员根据自身的水平选择题目，具体加分规则请参考荣耀之路规则</p>
    </div>
  	<ul>
      <li @click="toggle(tab.type,tab.view)" v-for="tab in tabs" :class="{'active': state == tab.type}">{{ tab.type }}</li>
    </ul>
    <br>
    <component :is="currentView" ></component>
 </div>
</template>

<script>
import gold from './problems/gold'
import silver from './problems/silver'
import copper from './problems/copper'

export default {
  name: 'problems',
  data () {
    return {
      currentView:copper,
      state:'青铜',
      tabs: [
        {
          type: '青铜',
          view: 'copper'
	    },
	    {
	      type: '白银',
	      view: 'silver'
	    },
	    {
	      type: '黄金',
	      view: 'gold'
	    }
	  ]
    }
  },
  methods: {
    toggle(t,v) {
      this.state = t;
	    this.currentView = v;
	}
  },
  components:{
  	copper,
  	silver,
  	gold
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#problems{
  padding-top: 50px;
  padding-bottom: 20px;
}
h1{
  color:#000;
  padding:10px;
}
li{
	font-size: 14px; 
}
.active {
    font-size: 20px;
    color: #2bb8ff;
    border-bottom: 2px solid #2bb8ff;

}
ul li {
  margin: 0 15px 20px 0px;
  padding: 10px 20px 0px 20px ;
  float:left;
  list-style: none;
}
#insert{
  margin-top: 0px;
  background-color: #2bb8ff;
  color:#fff;
  padding:5px 50px 5px 50px;
  font-size: 20px;
  border-radius:3px;
  border:0px;
}
</style>