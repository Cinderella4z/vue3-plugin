import MessageComponent from './Message.vue'
import { createApp } from 'vue'
import types from './types'


const Message = (option) => {
  const app = createApp(MessageComponent, option)
  show(app, option.duration)
}

// 既可以Message调用又可以Message.调用
Object.values(types).forEach(t => {
  Message[t] = (option) => {
    option.type = t
    Message(option)
  }
})

const show = (app, duration) => {
  const fragment = document.createDocumentFragment();
  const vm = app.mount(fragment)
  document.body.appendChild(fragment)
  vm.setShow(true)
  unshow(app, vm, duration)
}

const unshow = (app, vm, duration) => {
  setTimeout(() => {
    vm.setShow(false).then(() => {
      app.unmount()
    })
  }, duration || 3000);
}

export default Message