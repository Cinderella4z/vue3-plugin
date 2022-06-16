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
  app.mount(fragment)
  document.body.appendChild(fragment)
  unshow(app, duration)
}

const unshow = (app, duration) => {
  setTimeout(() => {
    app.unmount()
  }, duration || 3000);
}

export default Message