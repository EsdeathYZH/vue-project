
<template>
  <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
    <transition-group tag="ul" class='slide-ul' :name="move">
      <li v-for="(item , index ) in slides" :key="index" v-show="index===nowIndex">
        <a :href="item.href" :target="_blank">
          <img :src="item.src" alt="">
        </a>
      </li>
    </transition-group>
    <div class="control-wrapper">
      <a class="prev" @click="goto(prevIndex)"></a>
      <a class="next" @click="goto(nextIndex)"></a>
    </div>
    <div class="avtivity" >
        <div class="col-md-3 text-center">
          <button id="join" class="fadeInDown btn btn-primary ">报名活动</button>
        </div>
        <div class="col-md-3 text-center">
          <button id="create" class="fadeInDown btn btn-primary ">发布活动</button>
        </div>
        <div class="col-md-3 text-center">
          <button id="comment" class="fadeInDown btn btn-primary ">评价活动</button>
        </div>
        <div class="col-md-3 text-center">
          <button id="back" class="fadeInDown btn btn-primary ">活动回顾</button>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        nowIndex: 0,

        slides:[
          {
            src:"static/img/1.jpg",
            href:""
          },
          {
            src:"static/img/6.jpg",
            href:""
          },
          {
            src:"static/img/7.jpg",
            href:""
          }
        ],

        inv:3000,
        move:"move"
      }
    },
    computed: {
      prevIndex () {
        if (this.nowIndex === 0) {
          return this.slides.length - 1
        } else {
          return this.nowIndex - 1
        }
      },
      nextIndex () {
        if (this.nowIndex === this.slides.length - 1) {
          return 0
        } else {
          return this.nowIndex + 1
        }
      }
    },

    methods: {
      goto (index) {
        this.nowIndex = index
      },
      runInv () {
        this.invId = setInterval(() => {
          this.goto(this.nextIndex)
        }, this.inv)
      },
      clearInv () {
        clearInterval(this.invId)
      }
    },
    mounted () {
      this.runInv()
    }
  }
</script>
<style rel="stylesheet/css" scoped>
  .avtivity{
    display: inline-block;
    position: absolute;
    bottom:0;
    left:0;
    width:100%;
    height:100px;
    margin:0px;
    padding:0px;
  }
  .col-md-3{
    margin:0px;
  }
  button{
    padding:20px 100px 20px 100px;
    font-size: 20px;
    border-radius: 0px;
    background-color: transparent;
  }
  .control-wrapper a{
    display: inline-block;
    position: absolute;
    top: 50%;
    width: 41px;
    height: 69px;
    transform: translateY(-50%);
  }
  .prev {
    left: 0;
    display: inline-block;
    background: url("http://c1.mifile.cn/f/i/2014/cn/icon/icon-slides.png") no-repeat -84px 50%;
  }

  .prev:hover{
    background-position: 0 50%
  }

  .next {
    right: 0;
    display: inline-block;
    background: url(//c1.mifile.cn/f/i/2014/cn/icon/icon-slides.png) no-repeat -125px 50%;
  }

  .next:hover {
    background-position: -42px 50%;
  }


  .slide-show {
    margin-left:50px;
    margin-right:50px;
    border-radius:20px;
    position: relative;
    overflow: hidden;
    padding-bottom: 0px;
  }
  .slide-ul {
    width: 100%;
    height: 500px;
  }
  .slide-ul li {
    position: absolute;
    left:0;
    width: 100%;
    height: 100%;
  }
  .slide-ul li img {
    width: 100%;
    height: 100%;
  }
  .move-enter-active {
    transition: all 0.8s ease;
    transform: translateX(0)
  }
  .move-leave-active {
    transition: all 0.8s ease;
    transform: translateX(-100%);
  }
  .move-enter {
    transition: all 0.8s ease;
    transform: translateX(100%);
  }
  .move-leave {
    transition: all 0.8s ease;
    transform: translateX(0);
  }
</style>