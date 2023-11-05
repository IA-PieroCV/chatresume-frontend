<script setup lang="ts">
import TitleComponent from './components/TitleComponent.vue'
import InputTextComponent from './components/InputTextComponent.vue'
import ChatComponent from './components/ChatComponent.vue'
import { ref } from 'vue'
import type { Ref } from 'vue'

const user_promt: Ref<string> = ref('')
</script>

<template>
  <div class="principal flex justify-center items-center h-full flex-col">
    <TitleComponent />
    <ChatComponent />
    <InputTextComponent v-model="user_promt" />
  </div>
</template>

<style scoped>
.principal {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(-45deg, #1c0082, #0a0096, #005270, #006f46);
  background-size: 400% 400%;
  animation: gradient 10s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
