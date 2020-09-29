<template>
  <div class="hello">
    <header>
      <p class="titles">component</p>
    </header>
    <div class="content">
      <!--      左侧盒-->
      <div class="aside aside-left">
        <div class="leftLabel" @click="leftLabel(idx)" v-for= "(item,idx) in leftList">{{ item }}</div>
      </div>
      <!--右侧内容      -->
      <div class="aside aside-right">
        <el-row style="background-color: #fff;padding:10px;" v-if="checkIdx == 1" :gutter="17">
          <el-col :span="2"><div class="grid-content bg-purple">1</div></el-col>
          <el-col :span="2"><div class="grid-content bg-purple-light">2</div></el-col>
          <el-col :span="7"><div class="grid-content bg-purple-light">6</div></el-col>
        </el-row>
        <div v-if="checkIdx == 2">
          ww
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'homePage',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      leftList: ['左侧列表', 'layout', 'Upload'],
      checkIdx: 1
    }
  },
  computed: {

  },
  methods: {
    leftLabel(idx) {
      console.log(idx)
      if (idx) {
        this.checkIdx = idx
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
  .hello {
    background-color: #fff;
    box-sizing: border-box;
    header {
      width:100%;
      background-color: #efefef;
      .titles {
        text-align: center;
        font-size: 30px;
        margin:20px 0;
      }
    }
    .content {
      width:100%;
      height: calc(100vh - 100px);
      border-top: 2px solid #ffffff;
      .aside {
        float: left;
        height: 100%;
        box-sizing: border-box;
      }
      .aside-left {
        width: 25%;
        padding: 20px;
      }
      .aside-right {
        width: 75%;
        padding: 20px;
        background-color: #c2d3e7;
      }
    }
  }
  .leftLabel {
    width: 60%;
    margin-left:40%;
    height:40px;
    text-align: center;
    font-size:22px;
    color:#ffffff;
    border-bottom:2px solid #ffffff;
    line-height:40px;
    background-color: #dcddef;
  }
  .grid-content {
    text-align: center;
    color: #fff;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
</style>
