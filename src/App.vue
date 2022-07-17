<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import {initJsStore} from "~/db/jdb_service";
import {MessageService} from "~/db/message_service";

export default {
  async beforeCreate() {
    try {
      const isDbCreated = await initJsStore();
      if (isDbCreated) {
        console.log("db created");
        // prefill database
      } else {
        console.log("db opened");
      }
    } catch (ex) {
      console.log("error");
      console.log(ex);
      console.error(ex);
      alert(ex.message);
    }
  },
  mounted() {
    this.add()
    this.refreshStudent();
  },
  data() {
    return {
      students: [],
      messageService: new MessageService()
    };
  },
  methods: {
    async refreshStudent() {
      console.log('refreshStudent')
      this.students = await this.messageService.getMessagesByContact({contact: 'ss', skip: 0, limit: 10});
      console.log('refreshStudent result')
      console.log(this.students)



    },
    async add() {
      await this.messageService.addMessage({
        msgId: '1658067055942',
        sender: 'GiLang',
        receive: 'DaWenX',
        contact: 'DaWenX',
        'content': '你好',
        timestamp: 1658067055942,
        success: true
      })
      console.log('addMessage result')

    },
    addStudent(student) {
      this.students.push(student);
    }
  }
}
</script>

<style>

</style>
