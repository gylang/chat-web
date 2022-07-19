<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>


import {initJsStore} from "./db/jdb_service";

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
      alert(ex.message);
    }
  },
  mounted() {
  },
  data() {
    return {
      students: [],
    };
  },
  methods: {


  }
}
</script>

<style>

</style>
