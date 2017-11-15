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
  name: 'copper',
  data () {
    return {
      problem:{content:'',rank:''},
      problems: [
        {'content': '请使用typescript完成extname函数，该函数接收一个文件名作为参数，并返回该文件名的扩展名。例如，输入abc.txt，返回txt', 'rank':'青铜'},
        {'content': '斐波那契数列指的是类似于以下的数列：1, 1, 2, 3, 5, 8, 13, ….第 n 个数由数列的前两个相加而来：fibonacci(n) = fibonacci(n - 1) + fibonacci(n -2)请使用typescript完成fibonacci函数，该函数接收一个数字n为参数，可以获取该数列中的第n个数字。例如，fibonacci(0)=1，fibonacci(1)=1，fibonacci(2)=2，fibonacci(3)=3', 'rank':'青铜'},
        {'content': '使用typescript编写flatten函数，这个函数接收一个参数arr，是一个多维数组，返回数组被拍平后的结果。例如：输入[3, [5, [6]], [12], 17]，返回[3, 5, 6, 12, 17]', 'rank':'青铜'}
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
tr td{
  text-align: center;
  overflow: hidden;
}
tr th{
  text-align: text-center;
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