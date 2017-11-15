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
  name: 'gold',
  data () {
    return {
      problem:{content:'',rank:''},
      problems: [
        {'content': '1、请按照图中标注实现一个日历控件。仅可以使用原生的html、css、typescript，不允许使用任何框架（比如jQuery、Bootstrap等）。', 'rank':'黄金'},
        {'content': '2、请按照图中标注在提供的空react工程中实现一个日历控件，语言使用typescript。仅可以使用react全家桶，不允许使用任何其他框架（比如jQuery、Bootstrap等）。', 'rank':'黄金'},
        {'content': '3、请按照gif中的效果实现一个简易版的文字记录控件。仅可以使用原生的html、css、typescript，不允许使用任何框架（比如jQuery、Bootstrap等）。', 'rank':'黄金'}
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