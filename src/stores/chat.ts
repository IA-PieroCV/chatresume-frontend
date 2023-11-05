import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

interface Message {
  role: 'ia' | 'person'
  text: string
  identifier: number
  state: boolean
}

export const useMessageStore = defineStore('counter', () => {
  let id: number = 0
  const messages: Ref<Message[]> = ref([])
  const enabled_chat: Ref<boolean> = ref(true)

  async function addHumanMessage(param_text: string) {
    enabled_chat.value = false
    messages.value.push({
      role: 'human',
      text: param_text,
      identifier: id,
      state: true
    })
    id++
    await addIAMessate(param_text)
  }

  async function addIAMessate(param_text: string) {
    messages.value.push({
      role: 'ia',
      text: '',
      identifier: id,
      state: false
    })
    id++
    //Axios request
    const response_text = 'HOLA ME LLAMO PIERO XDDXD in response of ' + `${param_text}`
    ///////////////
    setTimeout(() => {
      messages.value[messages.value.length - 1].text = response_text
      messages.value[messages.value.length - 1].state = true
      enabled_chat.value = true
    }, 3000)
  }

  return { messages, enabled_chat, addHumanMessage }
})
