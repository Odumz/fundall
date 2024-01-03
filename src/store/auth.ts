import type { Ref, ComputedRef } from 'vue'
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count:Ref<number> = ref(0)
  const name:Ref<string> = ref('Eduardo')
  const doubleCount:ComputedRef<number> = computed(() => count.value * 2)

  const increment = () => count.value++

  return { count, name, doubleCount, increment }
})