import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

import axiosInstance from '@/axios/axios'

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
      role: 'person',
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
    try {
      const response = await axiosInstance.post(
        '/api/chatbot/get_message',
        {
          promptMessage: param_text
        },
        {
          headers: {
            accept: 'application/json'
          }
        }
      )
      if (response.status === 200) {
        messages.value[messages.value.length - 1].text = response.data.response
        messages.value[messages.value.length - 1].state = true
        enabled_chat.value = true
      } else {
        console.log(response)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return { messages, enabled_chat, addHumanMessage }
})
