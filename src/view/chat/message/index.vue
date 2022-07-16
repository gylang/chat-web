<template>

  <div>
    <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">

      <el-row v-for="message in messageList" type="flex" :justify="me === message.sender? '' : 'end'">
        <!--    发送发送人  -->
        <el-col v-if="me === message.sender" :span="1.5">
          <p class="sendInfo">{{ message.sender }}</p>
        </el-col>
        <el-col v-if="me === message.sender" :span="15">
          <div class="ui-poptip">
            <div class="ui-poptip-shadow">
              <div class="ui-poptip-container">
                <div class="ui-poptip-arrow ui-poptip-arrow-10">
                  <em></em>
                  <span></span>
                </div>
                <div class="ui-poptip-content">
                  {{ message.content }}
                </div>
              </div>
            </div>
          </div>

        </el-col>


        <el-col v-if="me !== message.sender" :span="15">
          <div class="ui-poptip">
            <div class="ui-poptip-shadow">
              <div class="ui-poptip-container">
                <div class="ui-poptip-arrow ui-poptip-arrow-2">
                  <em></em>
                  <span></span>
                </div>
                <div class="ui-poptip-content">
                  {{ message.content }}
                </div>
              </div>
            </div>
          </div>
        </el-col>
        <!--    发送发送人  -->
        <el-col v-if="me !== message.sender" :span="1.5">
          <p class="receiveInfo">{{ message.sender }}</p>
        </el-col>
      </el-row>


    </ul>

  </div>
</template>

<script>
export default {
  name: "message",
  props: {
    nowChat : {
      type : Object
    }
  },
  data() {
    return {
      me: 'GiLang',
      messageList: []
    }

  }, methods: {
    load() {
    },
    changeNowChat(nowChat) {

      this.messageList = [
        {
          content: `${nowChat.contactName}, 很高兴认识你!`,
          sender: 'GiLang',

        }, {
          content: '你好呀GiLang!',
          sender: nowChat.contactName,
        }, {
          content: '听说你这里有大飞的专辑?',
          sender: nowChat.contactName,
        }, {
          content: '是的, 我这里有这个喜仔的专辑, 你想要哪一个?',
          sender: 'GiLang',
        }, {
          content: '不是。“喜仔”在广东话中的意思是“喜儿子”，是表达对孩子的喜欢，也被情侣们用来介绍男朋友或作为爱称，但并没有死子的意思，“死子”在广东话中是骂人的语言。不是。“喜仔”在广东话中的意思是“喜儿子”，是表达对孩子的喜欢，也被情侣们用来介绍男朋友或作为爱称，但并没有死子的意思，“死子”在广东话中是骂人的语言。',
          sender: nowChat.contactName,
        }
      ]
    }
  },

}
</script>

<style scoped>
.el-row {
  margin-top: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}


.bg-purple {
  background: #e7ecf1;
}


.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.sendInfo {
  text-align: left;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 8px;
  overflow: hidden;
}

.receiveInfo {
  text-align: right;
  margin-right: 5px;
  margin-left: 5px;
  margin-top: 8px;
  overflow: hidden;
}

.infinite-list {
  margin: 0;
  padding: 0;
}

.sendMessage-purple {
  margin-top: 5px;
  margin-left: 5px;
  text-align: left;
  background-color: #292929;
  color: white;
  border-radius: 10px;

}

.sendMessage-purple:after {
  border-left-color: #292929;

  left: 100%;
  top: 50%;
  margin-top: -15px;
}

.receiveMessage-purple {
  margin-top: 5px;
  margin-right: 5px;
  text-align: right;

}
</style>
