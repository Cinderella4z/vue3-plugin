<template>
  <div :class="style">{{ props.message }}</div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({ message: String, type: String })
const style = computed(() => ['messageApp', props.type])

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
</style>