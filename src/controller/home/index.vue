<template>
  <div class="hello">
    <header>
      <p class="titles">component</p>
    </header>
    <div class="content">
      <!--      左侧盒-->
      <div class="aside aside-left">
        <h2 style="color: #ffffff;text-align: center;line-height:40px;">左侧列表</h2>
        <span class="leftLabel" @click="leftLabel(idx)" :class="idx == checkIdx ? 'check-left-label': ''" v-for= "(item,idx) in leftList">{{ item }}
        </span>
      </div>
      <!--右侧内容      -->
      <div class="aside aside-right">
        <div v-if="checkIdx == 0" style="border: 1px solid #ebebeb;padding:20px;">
          <el-row type="flex" :gutter="17">
            <el-col :span="2"><div class="grid-content bg-purple">1</div></el-col>
            <el-col :span="2"><div class="grid-content bg-purple-light">2</div></el-col>
            <el-col :span="7"><div class="grid-content bg-purple-light">6</div></el-col>
          </el-row>
          <el-row type="flex" :gutter="0">
            <el-col :span="6"><div class="grid-content bg-purple">1</div></el-col>
            <el-col :span="6"><div class="grid-content bg-purple-light">2</div></el-col>
            <el-col :span="12"><div class="grid-content bg-purple-dark">6</div></el-col>
          </el-row>
          <el-row type="flex" :gutter="4">
            <el-col :span="8"><div class="grid-content bg-purple">1</div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple-light">2</div></el-col>
            <el-col :span="8"><div class="grid-content bg-purple-dark">6</div></el-col>
          </el-row>
          <el-row type="flex" :gutter="17">
            <el-col :span="2"><div class="grid-content bg-purple">1</div></el-col>
            <el-col :span="2"><div class="grid-content bg-purple-light">2</div></el-col>
            <el-col :span="7"><div class="grid-content bg-purple-dark">6</div></el-col>
            <el-col :span="5"><div class="grid-content bg-purple">1</div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple-light">2</div></el-col>
            <el-col :span="3"><div class="grid-content bg-purple">1</div></el-col>
          </el-row>
          <el-row type="flex" :gutter="0">
            <el-col :span="2"><div class="grid-content bg-purple">1</div></el-col>
            <el-col :span="2"><div class="grid-content bg-purple-light">2</div></el-col>
            <el-col :span="7"><div class="grid-content bg-purple-dark">6</div></el-col>
            <el-col :span="2"><div class="grid-content bg-purple">1</div></el-col>
            <el-col :span="2"><div class="grid-content bg-purple-light">2</div></el-col>
            <el-col :span="7"><div class="grid-content bg-purple-dark">6</div></el-col>
            <el-col :span="2"><div class="grid-content bg-purple">1</div></el-col>
          </el-row>
        </div>
        <div v-if="checkIdx == 1">
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
      leftList: ['layout', 'Upload'],
      checkIdx: 1
    }
  },
  computed: {

  },
  methods: {
    leftLabel(idx) {
      console.log(idx)
      // if (idx) {
      this.checkIdx = idx
      // }
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
        width: 15%;
        padding: 10px;
        background-color: #898993;
      }
      .aside-right {
        width: 85%;
        padding: 20px;
      }
    }
  }
  .leftLabel {
    width: 100%;
    height:40px;
    display: block;
    text-align: center;
    font-size:22px;
    color:#42424f;
    background-color:#ffffff;
    margin-bottom: 4px;
    line-height:40px;
    border-radius:20px;
  }
  .check-left-label {
    color:#fff;
    background-color:#42424f;
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
