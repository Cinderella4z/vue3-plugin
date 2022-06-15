<template>

  <button @click="
  Message.success({
    type: 'error',
    message: 'sucess',
    duration: 1000
  })">success</button>

  <button @click="
  Message.error({
    type: 'error',
    message: 'error'
  })">error</button>

  <button @click="
  Message({
    type: 'warning',
    message: 'warning'
  })">warning</button>

  <button @click="
  Message({
    type: 'message',
    message: 'message'
  })">message</button>


</template>

<script setup>
import { ref } from 'vue'
import Message from './components/Message'




</script>

<style lang='less' scoped>
</style>