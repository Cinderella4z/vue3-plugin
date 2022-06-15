import MessageApp from './Message.vue'
import { createApp } from 'vue'
import types from './types'


const Message = (option) => {
  const app = createApp(MessageApp, option)
  console.log(option);

  show(app, option.duration)
}

Object.values(types).forEach(t => {
  Message[t] = (option) => {
    option.type = t
    return Message(option)
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