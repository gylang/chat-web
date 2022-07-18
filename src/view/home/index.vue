<template>

  <div class="c-container">
    <!--  侧边联系栏  -->
    <div class="contact-tab">

      <div class="function-tab">
        <el-avatar class="margin-left-5 margin-top-10" shape="square" :size="50" :src="meAvatar"></el-avatar>
      </div>
      <!--    联系人栏目  -->
      <div class="contact-list-tab">
        <div class="contact-list-search">
          <el-input placeholder="请输入内容" v-model="searchInput" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <div class="contact-list-content">
          <ul class="infinite-list padding-0 margin-left-5 nowChatList" v-infinite-scroll="loadNowChatList"
              style="overflow:auto">
            <!--      当前联系信息      -->
            <el-row v-for="nowChat in nowChatList" style="margin-left: 0"
                    class="infinite-list-item margin-0 nowChatItem">
              <div @click="changeNowChat(nowChat)"
                   :class="(selectedNowChat && nowChat.contactId === selectedNowChat.contactId) ? 'selectNowChat h-60' : 'h-60'">
                <div>
                  <el-avatar class="float-left" shape="square" :size="50" :src="nowChat.avatar"></el-avatar>
                </div>
                <div class="float-left h-20">{{ nowChat.contactName }}</div>
                <div class="float-right margin-right-5 h-20">{{
                    nowChat.timestamp|formatDate('yyyy-MM-dd HH:mm:ss')
                  }}
                </div>
                <div class="float-left margin-top-10 h-30">{{ nowChat.message }}</div>
              </div>

            </el-row>

          </ul>
        </div>
      </div>
    </div>
    <!--   主聊天窗口 -->
    <div class="chat-tab">
      <!--    头部显示  -->
      <div class="chat-header">
        <usermeta :nowChat="selectedNowChat"/>
      </div>
      <!--   内容区   -->
      <div class="chat-content">
        <message ref="messageRef"/>
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
            :rows="6"
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
import * as dayjs from 'dayjs'
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
      inputText: '',
      searchInput: null,
      selectedNowChat: null,
      nowChatList: [],
      meAvatar: "https://img0.baidu.com/it/u=1694074520,2517635995&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
    }
  },
  methods: {
    loadNowChatList() {
    },
    changeNowChat(nowChat) {
      this.selectedNowChat = nowChat;
      this.$refs.messageRef.changeNowChat(nowChat)
    }
  },
  created() {
    this.nowChatList = this.messageService.recentlyMessage()
  }
}
</script>

<style scoped>
.c-container {
  margin: 50px 100px 100px;
  width: 1600px;
  height: 760px;
  border: 1px solid;
}

.contact-tab {
  width: 401px;
  height: 710px;
  float: left;
  border-right: 1px solid;
}

.chat-tab {
  width: 1000px;
  height: 710px;
  float: left;
  border-right: 1px solid;
}

.function-tab {
  width: 60px;
  height: 710px;
  float: left;
  border-right: 1px solid;
}

.contact-list-tab {
  width: 340px;
  height: 710px;
  float: left;

}

.contact-list-search {
  width: 340px;
  height: 40px;
  border-bottom: 1px solid;
}

.contact-list-content {
  width: 340px;
  height: 710px;
}

.chat-header {
  width: 1000px;
  height: 40px;
  border-bottom: 1px solid;
}

.chat-content {
  width: 1000px;
  height: 520px;
  border-bottom: 1px solid;

}

.chat-send-tab {
  width: 1000px;
  height: 138px;

}

.chat-send-btn-group {
  width: 1000px;
  height: 60px;
  border-top: 1px solid;

}

.chat-send-btn {
  float: right;
  height: 40px;
  margin-top: 15px;
  margin-right: 5px;
  margin-left: 5px;
  text-align: center;
}

.nowChatItem {
  width: 310px;
  border-bottom: 1px solid;
}

.nowChatList {
  height: 695px;
}

.selectNowChat {

  background-color: #e7ecf1;
}
</style>
