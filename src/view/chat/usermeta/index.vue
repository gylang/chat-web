<template>
  <div class="um_header">
    <div class="um-name">{{nowChat? nowChat.contactName : null}}</div>
  </div>
</template>

<script>
export default {
  name: "usermeta",
  props :['nowChat'],
  data() {
    return {
      nowChatVal : undefined
    }
  },


}
</script>

<style scoped>
 .um_header{
   float: left;
   height: 40px;

 }
 .um-name{
   margin-left: 10px;
   font-size: 18px;
   text-align: center;
   display: flex;
   height: 40px;
   align-content: space-around;
   flex-direction: row-reverse;
   flex-wrap: wrap;
 }
</style>
