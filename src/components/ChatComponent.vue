<template>
  <div class="container_chat w-3/5 bg-white bg-opacity-70 mb-8 rounded-lg overflow-auto">
    <div v-if="messageStore.messages" class="m-0 p-0">
      <ChatLineComponent
        v-for="message in messageStore.messages"
        :key="message.identifier"
        :role="message.role"
        :text="message.text"
        :state="message.state"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ChatLineComponent from '@/components/ChatLineComponent.vue'
import { useMessageStore } from '../stores/chat'

const messageStore = useMessageStore()
</script>

<style scoped>
.container_chat {
  max-height: 70%;
}
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 8px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(30, 30, 30, 0.4);
  border-radius: 8px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgba(100, 100, 100, 0.4);
  border-radius: 8px;
}
</style>
