# 项目名称：尝试制作DOIT社团荣耀之路活动前端界面
> IDE:sublime Text 3

> 语言：HTML CSS vue.js

> 框架：vue.js

> 所用工具：vue-cli webpack NPM http-server

## 开发命令

### 安装依赖
npm install

### 调试模式运行
npm run dev

### 项目打包压缩
npm run build

### 查看打包分析结果
npm run build --report

### 运行单元测试
npm run unit

### 运行端对端测试
npm run e2e

### 运行所有测试
npm test

## 开发周期

#####该项目为软件工程创新实践的作业，由于开始时间较晚，总共开发时长为一周，分为学习Vue、配置框架开发环境、开发、测试、部署等步骤

## 配置开发环境

1.建立文件夹

2.npm install vue-cli

3.vue init webpack my-project 建立项目初始目录

4.cd进入目录，npm install安装依赖

5.在网上下载项目所需Bootstrap的CSS文件，Font Awesome的字体文件，以及jQuery的一部分js文件，并将其按照目录放入static资源中

## 开发一系列组件

如图所示，开发写出的代码基本都放在src的components文件夹里，为了贯彻vue所倡导的组件化思想，我将每个功能分区都写成了组件，最终都放在App这个组件中

![]("./filetree.png")

### 组件有：

### navbar（顶部固定的导航栏）
![]("navbar.png")

### jumbotron（首页欢迎标语）
![]("jumbotron.png")

### carousel（可自动播放的海报栏）
![]("carousel.png")

### submit（参加活动学员提交代码的表格组件）
![]("submit.png")

### student（参加活动的学员名单，由于没有后端，直接在界面上添加了添加学员的功能，老师可以在网页上尝试，但是新添加的数据只能在网页上看到，无法持久保存）
![]("student.png")

### problems（活动试题库，为了节省空间，每个难度只放了三道题，上方通过vue实现了tab选项卡的功能，这个组件涵盖了子文件夹problems底下的copper、silver、gold三个题目类型组件，该组件也支持直接在页面上添加题目的功能）
![]("problems.png")

### major（社团方向，一个简单的网格布局，应用了几个fa图标，没有太多逻辑）
![]("major.png")

### homework（作品展示栏，通过Bootstrap的网格布局，展示优秀的网页作品，在这个组件上添加了一些CSS动画）
![]("homework.png")
<br><br>
## 版本控制

###使用git工具配合github进行版本控制，因为是单人作业，项目仓库只有master一个branch，也不涉及解冲突的情况，任老师可查看仓库的commit记录才查看具体项目完成情况
<br><br>
## 测试

#### 测试使用的是Karma测试工具,mocha 前端测试框架和chai断言库

#### 在test/unit/UnitTest.spec.js中编写了18个单元测试用例，测试的重点主要为Vue的数据绑定是否成功，用Vue添加的点击事件、添加功能是否运行正常，由于是第一次接触测试框架，经过单元测试，测试覆盖率达到了90%以上，基本符合预期要求。但在我看来，项目核心的组件函数逻辑均编写了单元测试，没有达到100%的覆盖率的原因还需进一步学习研究。

下面是测试截图：
![]("unit.png")

测试覆盖率结果：
![]("coverage.png")
<br><br>
## 部署

### 通过npm run build命令将项目打包，生成了dist文件夹，里面存放着可部署在服务器上的项目文件，可以看到，所有的代码基本上都被框架整合到了index.html中，但是static静态资源并没有整合，而是原封不动的放在dist中

### 将项目文件拖动到服务器上，在服务器环境中安装http-server，此为部署所需的工具

### 进入dist文件夹，运行http-server -a 202.120.40.109 -p 8080 将项目部署到8080端口上，8080端口被映射到22380端口上，所以访问项目需访问202.120.40.109:22380 这个地址。

### 访问上述地址，即可看到项目界面，如果滚轮过快可能会出现fade效果的延迟导致看不到一部分内容，这个Bug尚未解决

### 给出项目截图：
![]("project.png")


