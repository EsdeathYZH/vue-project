<template>
   <div id="student" class="container wow fadeInRight" data-wow-offset="0" data-wow-delay="0.4s">
    <div id="student-title"class="text-center">
        <h1>学员</h1>
        <p>加入训练营,成为荣耀之路的学员！</p>
    </div>
    <table class="table table-bordered table-striped text-center">
        <thead>
            <tr>
                <th>序号</th>
                <th>姓名</th>
                <th>年级</th>
                <th>方向</th>
                <th>段位</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for ="(user,index) in users">
              <td>{{index+1}}</td>
              <td>{{user.name}}</td>
              <td>{{user.grade}}</td>
              <td>{{user.major}}</td>
              <td>{{user.rank}}</td>
            </tr>
            <tr>
              <td></td>
              <td><input class="form-control" type="text" placeholder="姓名" id="name" v-model="user.name"/></td>
              <td><input class="form-control" type="text" placeholder="年级"id="grade" v-model="user.grade"/></td>
              <td><input class="form-control" type="text" placeholder="方向" id="major" v-model="user.major"/></td>
              <td><input class="form-control" placeholder="段位"type="text" id="rank" v-model="user.rank"/></td>
            </tr>
            <tr>
              <td></td>
              <td colspan="4"><button id="insert" @click="insert">添加新成员</button></td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'student',
  data () {
    return {
      user:{name:'',grade:'',major:'',rank:''},
      users: [
        {'name': '王楚妍', 'grade': '研一', 'major': 'react','rank':'倔强青铜1'},
        {'name': '李澄曜', 'grade': '大四', 'major': 'typescript','rank':'倔强青铜1'},
        {'name': '苏梦珂', 'grade': '研一', 'major': 'javascript','rank':'倔强青铜1'}
      ]
    }
  },
  methods: {
    insert: function () {
      this.users.push(this.user)
    },
    remove: function (index) {
      this.users.splice(index, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#student{
  padding-top:50px;
  padding-bottom: 20px;
}
h1{
  color:#000;
  padding:10px;
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
.form-control{
  width: 70%;
  margin-left: 40px;
}
tr,th{
  text-align:center;
}
</style>