import { createApp, watch } from 'vue'
import MessageBoxComponent from './MessageBox.vue'


const type = ['confirm', 'prompt']

const MessageBox = (option) => {
  const app = createApp(MessageBoxComponent, option)

  return new Promise((resolve, reject) => {
    showMessageBox(app, { resolve, reject })
  })

}
const showMessageBox = (app, { resolve, reject }) => {
  const frag = document.createDocumentFragment()
  const vm = app.mount(frag)
  document.body.appendChild(frag)
  vm.setVisible(true)

  watch(vm.state, (state) => {
    if (!state.visible) {

      switch (state.status) {
        case 'confirm':
          resolve(state.promptV)
          break;
        case 'cancel':
          reject()
          break;
        default:
          break;
      }


    }

  })



}

type.forEach(i => {
  MessageBox[i] = (option) => {
    option.type = i
    return MessageBox(option)
  }
});





export default MessageBox