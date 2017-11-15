<template>
   <div id="copper">
    <table class="table table-bordered table-striped text-center">
        <thead>
            <tr>
                <th>序号</th>
                <th>内容</th>
                <th>难度</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for ="(problem,index) in problems">
              <td>{{index+1}}</td>
              <td>{{problem.content}}</td>
              <td>{{problem.rank}}</td>
            </tr>
            <tr>
              <td></td>
              <td><input class="form-control" type="text" placeholder="题目内容" id="content" v-model="problem.content"/></td>
              <td><input class="form-control" placeholder="难度"type="text" id="rank" v-model="problem.rank"/></td>
            </tr>
            <tr>
              <td></td>
              <td colspan="4"><button id="insert" @click="insert">添加新题目</button></td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'silver',
  data () {
    return {
      problem:{content:'',rank:''},
      problems: [
        {'content': '1、有一个 div#wrapper 元素，高、宽度都未知。它其中有一个宽高都为 100px 的 div#box 元素，请你完成 CSS，使得 无论div#wrapper的位置、长宽的具体数值都可以满足div#box 在 div#wrapper 内水平、垂直方向居中。', 'rank':'白银'},
        {'content': '2、仅使用html和css实现类似图中的留言簿，仅需要实现基本样式，不需要实现功能。', 'rank':'白银'},
        {'content': '3、使用typescript实现一个方法allTags，可以返回当前html页面的所有标签名，可以不考虑顺序，但是需要去重。', 'rank':'白银'}
      ]
    }
  },
  methods: {
    insert: function () {
      this.problems.push(this.problem)
    },
    remove: function (index) {
      this.problems.splice(index, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
th td{
  text-align: center;
  overflow: hidden;
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