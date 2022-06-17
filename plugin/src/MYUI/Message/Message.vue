<template>

  <transition>
    <div :class="style" v-if="show">{{ props.message }}</div>
  </transition>

</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({ message: String, type: String })
const style = computed(() => ['messageApp', props.type])

const show = ref(false)
const setShow = (bool) => {
  show.value = bool

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('')
    }, 500);
  })
}

defineExpose({
  setShow,
})


</script>

<style lang='less' scoped>
.messageApp {
  position: fixed;
  left: 50%;
  z-index: 999;
  width: 300px;
  height: 40px;
  margin-left: -190px;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
  border-radius: 5px;
  color: white;
}

.success {
  background-color: #67C23A;
}

.warning {
  background-color: #E6A23C;
}

.error {
  background-color: #F56C6C;
}

.message {
  background-color: #909399;
}

.v-enter-active {
  transition: all .5s;

}

.v-leave-active {
  transition: all .5s;

}



.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>