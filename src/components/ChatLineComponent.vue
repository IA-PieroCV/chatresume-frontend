<template>
  <div :class="classes_div">
    <img
      :src="props.role === 'ia' ? IAPicture : HumanPicture"
      alt="avatar"
      class="rounded-full mx-2"
    />
    <div class="bg-white rounded-3xl py-3 px-3 mx-1 max-w-4xl">
      <p v-if="props.state" class="font-mono whitespace-normal">
        {{ actual_text }}
        <span v-if="props.text !== actual_text" class="cursor"></span>
      </p>
      <p v-else class="py-3">
        <span class="typing__dot"></span>
        <span class="typing__dot"></span>
        <span class="typing__dot"></span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import type { Ref } from 'vue'

import IAPicture from '@/assets/ai.jpg'
import HumanPicture from '@/assets/human.jpg'

const actual_text: Ref<string> = ref('')
const props = defineProps({
  role: String,
  text: String,
  identifier: Number,
  state: Boolean
})

const classes_div = computed<string>(
  () => 'my-3 flex items-center ' + (props.role === 'ia' ? 'ia_chat' : 'human_chat')
)

function type_text() {
  if (props.text && actual_text.value !== props.text) {
    actual_text.value = props.text?.slice(0, actual_text.value.length + 1) ?? ''
    setTimeout(type_text, 30)
  } else {
    setTimeout(type_text, 30)
  }
}

onMounted(() => {
  if (props.role === 'ia') {
    type_text()
  } else {
    actual_text.value = props.text ?? ''
  }
})
</script>

<style scoped>
.cursor {
  border: 5px solid black;
  background-color: black;
}
.human_chat {
  flex-direction: row-reverse;
}

.typing__dot {
  float: left;
  width: 8px;
  height: 8px;
  margin: 0 4px;
  background: #8d8c91;
  border-radius: 50%;
  opacity: 0;
  animation: loadingFade 1s infinite;
}

.typing__dot:nth-child(1) {
  animation-delay: 0s;
}

.typing__dot:nth-child(2) {
  animation-delay: 0.2s;
}

.typing__dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes loadingFade {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
  }
}
</style>
