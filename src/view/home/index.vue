<template>

  <div class="c-container">
    <!--  侧边联系栏  -->
    <div class="contact-tab">

      <div class="function-tab"></div>
      <!--    联系人栏目  -->
      <div class="contact-list-tab">
        <div class="contact-list-search"></div>
        <div class="contact-list-content"></div>
      </div>
    </div>
    <!--   主聊天窗口 -->
    <div class="chat-tab">
      <!--    头部显示  -->
      <div class="chat-header">
        <usermeta/>
      </div>
      <!--   内容区   -->
      <div class="chat-content">
        <message/>
      </div>
      <!--    发送区  -->
      <div class="chat-send-tab">
        <el-input
            class="inputText-tab"
            type="textarea"
            placeholder="请输入内容"
            v-model="inputText"
            maxlength="400"
            resize="none"
            :rows="7"
            show-word-limit
        ></el-input>
      </div>
      <!--  按钮区     -->
      <div class="chat-send-btn-group">
        <el-button type="success" plain class="chat-send-btn">发&emsp;送</el-button>
      </div>
    </div>
  </div>

</template>

<script>
import Usermeta from "~/view/chat/usermeta";
import Message from "~/view/chat/message";

export default {

  components: {
    Message,
    Usermeta

  },
  name: "Home",
  data() {
    return {
      inputText : ''
    }
  }
}
</script>

<style scoped>
.c-container {
  margin: 100px 100px 100px;
  width: 1600px;
  height: 810px;
  border: #000 1px;
}

.contact-tab {
  width: 400px;
  height: 810px;
  float: left;
  background-color: rgba(105, 168, 189, 0.31);
}

.chat-tab {
  width: 1000px;
  height: 810px;
  float: left;
  background-color: rgba(74, 118, 132, 0.31);
}

.function-tab {
  width: 60px;
  height: 810px;
  float: left;
  background-color: rgba(55, 88, 99, 0.31);
}

.contact-list-tab {
  width: 340px;
  height: 810px;
  float: left;
  background-color: rgba(61, 119, 139, 0.31);
}

.contact-list-search {
  width: 340px;
  height: 50px;
  background-color: rgba(49, 133, 161, 0.31);
}

.contact-list-content {
  width: 340px;
  height: 760px;
  background-color: rgba(31, 85, 104, 0.31);
}

.chat-header {
  width: 990px;
  height: 40px;
  padding-top: 10px;
  padding-left: 10px;
  background-color: rgba(74, 118, 132, 0.31);
}

.chat-content {
  width: 1000px;
  height: 550px;
  background-color: rgba(27, 93, 114, 0.31);
}

.chat-send-tab {
  width: 1000px;
  height: 150px;
  background-color: rgba(66, 91, 99, 0.31);
}

.chat-send-btn-group {
  width: 1000px;
  height: 60px;
  background-color: rgba(64, 126, 146, 0.31);
}
.chat-send-btn{
  float: right;
  height: 40px;
  margin-top: 15px;
  margin-right: 5px;
  margin-left: 5px;
  text-align: center;
}
</style>
