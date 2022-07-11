<template>

  <div>
    <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">

      <el-row v-for="message in messageList" type="flex" :justify="me === message.sender? '' : 'end'">
        <!--    发送发送人  -->
        <el-col v-if="me === message.sender" :span="1.5">
          <p class="sendInfo">{{ message.sender }}</p>
        </el-col>
        <el-col v-if="me === message.sender" :span="15">
          <div class="grid-content bg-purple">
            {{ message.content }}
          </div>
        </el-col>


        <el-col v-if="me !== message.sender" :span="15">
          <div class="grid-content bg-purple">
            {{ message.content }}
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
  data() {
    return {
      me: 'GiLang',
      messageList: [
        {
          content: '达文西, 很高兴认识你!',
          sender: 'GiLang',

        }, {
          content: '你好呀GiLang!',
          sender: 'DaWens',
        }, {
          content: '听说你这里有大飞的专辑?',
          sender: 'DaWens',
        }, {
          content: '是的, 我这里有这个喜仔的专辑, 你想要哪一个?',
          sender: 'GiLang',
        }
      ]
    }

  }, methods: {
    load() {
    }
  }
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
  background: #d3dce6;
}


.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.sendInfo {
  text-align: left;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 5px;
  overflow: hidden;
}

.receiveInfo {
  text-align: right;
  margin-right: 5px;
  margin-left: 5px;
  margin-top: 5px;
  overflow: hidden;
}
.infinite-list{
  margin: 0;
  padding: 0;
}
</style>
