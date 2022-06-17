<template>

  <transition>
    <div class="MessageBoxField" v-show="state.visible">

      <div class="MessageBox">
        <div class="message-box-title">
          {{ title }}
        </div>

        <div class="message-box-content">{{ content }}</div>
        <div v-if="props.type === 'prompt'">
          <input class="message-box-input" v-model="state.promptV">
        </div>

        <div class="message-box-btn">
          <button class="btn cancel" @click="cancel">{{ cancelBtnText }}</button>
          <button class="btn confirm" @click="comfirm">{{ confirmBtnText }}</button>
        </div>
      </div>

    </div>
  </transition>

</template>

<script setup>
import { ref, reactive } from 'vue'

const state = reactive({
  visible: false,
  status: '',
  promptV: '',
})

const setVisible = (bool) => {
  state.visible = bool
}

const cancel = () => {
  state.status = 'cancel'
  state.visible = false
}

const comfirm = () => {
  state.status = 'confirm'
  state.visible = false
}


const props = defineProps({
  title: {
    type: String,
    default: 'title',
  },
  content: {
    type: String,
    default: 'title',
  },
  confirmBtnText: {
    type: String,
    default: '确定  ',
  },
  showCancelBtn: {
    type: Boolean,
    default: false,
  },
  cancelBtnText: {
    type: String,
    default: '取消',
  },
  type: {
    type: String,
    default: ''
  }
})

defineExpose({
  setVisible, state
})

</script>

<style lang='less' scoped>
.MessageBox {
  position: fixed;
  left: 50%;
  top: 50%;
  z-index: 999;
  transform: translate(-50%, -50%);
  height: 210px;
  width: 420px;
  border-radius: 5px;
  background-color: #fff;


  .message-box-title {
    padding: 15px 15px 10px;
    font-size: 18px;
  }

  .message-box-content {
    padding: 10px 15px;
    font-size: 14px;
  }

  .message-box-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 5px 15px 15px;
  }

  .message-box-input {
    width: 390px;
    height: 40px;
    padding: 0 15px;
    outline: none;
    border-radius: 4px;
    box-sizing: border-box;
    border: 1px solid #dcdfe6;
    margin: 10px 15px;
  }


  .btn {
    width: 60px;
    height: 32px;
    margin-left: 10px;
    padding: 8px 15px;
    border-radius: 3px;
    border: none;
    outline: none;
    font-size: 12px;

    &.cancel {
      background-color: #ffffff;
      border: 1px solid rgb(220, 223, 230);
      color: rgb(96, 98, 102);
    }

    &.confirm {
      background-color: #409eff;
      color: #fff;
    }
  }
}

.MessageBoxField {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-active {
  transition: all .5s ease-in;
}

.v-leave-active {
  transition: all .5s ease-out;
}
</style>