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
              <div @click="changeNowChat(nowChat)" :class="nowChat.contactId === selectedNowChat.contactId ? 'selectNowChat h-60' : 'h-60'">
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
      nowChatList: [
        {
          contactId: 1,
          contactName: '冰山蝶雨',
          avatar: 'https://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          message: 'GiLang你好, 现在有空?...',
          timestamp: 1657632888846,
          num: 4512
        }, {
          contactId: 2,
          contactName: '新萝卜蹲',
          avatar: 'https://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          message: 'GiLang你好, 现在有空?...',
          timestamp: 1657632888846,
          num: 421
        }, {
          contactId: 3,
          contactName: '起床困难户',
          avatar: 'https://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          message: 'GiLang你好, 现在有空?...',
          timestamp: 1657632888846,
          num: 124
        }, {
          contactId: 4,
          contactName: '舍不得五个萌娃@',
          avatar: 'https://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          message: 'GiLang你好, 现在有空?...',
          timestamp: 1657632888846,
          num: 54
        }, {
          contactId: 5,
          contactName: '春日终章',
          avatar: 'https://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          message: 'GiLang你好, 现在有空?...',
          timestamp: 1657632888846,
          num: 523
        }, {
          contactId: 6,
          contactName: '^你和喵',
          avatar: 'https://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          message: 'GiLang你好, 现在有空?...',
          timestamp: 1657632888846
        }, {
          contactId: 7,
          contactName: '爱洗澡的跳跳虎',
          avatar: 'https://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          message: 'GiLang你好, 现在有空?...',
          timestamp: 1657632888846,
          num: 523
        }, {
          contactId: 8,
          contactName: '奶包妹纸ε么哒哒∩_∩',
          avatar: 'https://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          message: 'GiLang你好, 现在有空?...',
          timestamp: 1657632888846,
          num: 523
        }, {
          contactId: 9,
          contactName: '我来自熊猫星',
          avatar: 'https://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          message: 'GiLang你好, 现在有空?...',
          timestamp: 1657632888846,
          num: 523
        }, {
          contactId: 10,
          contactName: '不过一场颠覆',
          avatar: 'https://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          message: 'GiLang你好, 现在有空?...',
          timestamp: 1657632888846,
          num: 523
        }, {
          contactId: 11,
          contactName: '初懵',
          avatar: 'https://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          message: 'GiLang你好, 现在有空?...',
          timestamp: 1657632888846,
          num: 523
        }, {
          contactId: 12,
          contactName: '可愛到飞起',
          avatar: 'https://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          message: 'GiLang你好, 现在有空?...',
          timestamp: 1657632888846,
          num: 523
        }, {
          contactId: 13,
          contactName: '校服一穿就变乖',
          avatar: 'https://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          message: 'GiLang你好, 现在有空?...',
          timestamp: 1657632888846,
          num: 523
        }, {
          contactId: 14,
          contactName: '草莓ぇ宝',
          avatar: 'https://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          message: 'GiLang你好, 现在有空?...',
          timestamp: 1657632888846,
          num: 523
        }, {
          contactId: 15,
          contactName: '麦兜兜',
          avatar: 'https://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          message: 'GiLang你好, 现在有空?...',
          timestamp: 1657632888846
        }, {
          contactId: 16,
          contactName: '酒醒梦断',
          avatar: 'https://img1.baidu.com/it/u=1016138010,1907110459&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500',
          message: 'GiLang你好, 现在有空?...',
          timestamp: 1657632888846
        },
      ],
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
