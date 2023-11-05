<template>
  <h1 class="mb-4 text-6xl font-light text-white">{{ title_text }}</h1>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'

const title_text: Ref<string> = ref('PieroCV Chat Resume.')
const title_length: Ref<number> = ref(title_text.value.length)
</script>

<style scoped>
h1 {
  font-size: 70px;
  font-weight: 500;
  font-family: 'Courier Prime', monospace;
  color: white;
  border-right: 4px solid white;
  animation:
    cursor 1s infinite step-end,
    typing 2s steps(v-bind(title_length));
  white-space: nowrap;
  overflow: hidden;
}
@keyframes cursor {
  0%,
  100% {
    border-color: transparent;
  }
  50% {
    border-color: white;
  }
}

@keyframes typing {
  0% {
    width: 0ch;
  } /*Text is hidden*/
  100% {
    width: calc(v-bind(title_length) * 1ch);
  }
}
</style>
