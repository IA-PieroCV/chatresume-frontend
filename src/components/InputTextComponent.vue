<template>
  <form
    class="flex bg-white rounded-full justify-between items-center w-5/12"
    @submit.prevent=""
  >
    <IconChat class="h-8 ml-3 mr-2 text-gray-300" />
    <input v-model="modelValue" type="text" class="w-full h-12" :placeholder="rq" />
    <button
      :disabled="!messageStore.enabled_chat"
      class="h-12 rounded-r-full pl-2 pr-5 border-l-2"
      @click="sendHumanMessage"
    >
      <IconPaperPlane class="h-8 ml-2 text-gray-600" />
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Ref } from 'vue'
import { IconChat } from '@iconify-prerendered/vue-bi'
import { IconPaperPlane } from '@iconify-prerendered/vue-fe'
import randomQuestion from '@/utils/randomQuestion'
import { useMessageStore } from '@/stores/chat'

const rq: Ref<string> = ref('')
const modelValue = defineModel<string>()

const messageStore = useMessageStore()

onMounted(() => {
  rq.value = randomQuestion()
})

function sendHumanMessage() {
  if (modelValue.value !== '') {
    messageStore.addHumanMessage(modelValue.value ?? '')
    modelValue.value = ''
  } else {
    alert('Try to send a message!')
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}
</style>
