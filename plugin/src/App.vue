<template>

  <!-- Message -->
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
  -----------------------------------------------------
  <!-- MessageBox -->
  <button @click="showMessageBox">MessageBox</button>
  <button @click="showMessageBoxConfirm">MessageBoxConfirm</button>
  <button @click="showMessagePrompt">MessageBoxPrompt</button>

</template>

<script setup>
import { Message } from './MYUI'
import { MessageBox } from './MYUI'

const showMessageBox = () => {
  MessageBox({
    title: '提示',
    confirmBtnText: '确定',
    content: '这是MessageBox',
  })
}


const showMessageBoxConfirm = () => {
  MessageBox.confirm({
    title: '提示',
    showCancelBtn: true,
    cancelBtnText: '取消',
    content: '这是MessageBoxConfirm',
  })
}

const showMessagePrompt = () => {
  MessageBox.prompt({
    title: '提示',
    showCancelBtn: true,
    cancelBtnText: '取消',
    confirmBtnText: '确定',
    content: '这是MessageBoxPrompt',
  }).then((res) => {
    console.log(res, '成功');
  }).catch(() => {
    console.log('失败');
  })
}


</script>

<style lang='less' scoped>
</style>