// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  // 💾 State (like data)
  state: () => ({
    count: 0
  }),

  // 🧮 Getters (like computed properties)
  getters: {
    doubleCount: (state) => state.count * 2
  },

  // ⚙️ Actions (like methods)
  actions: {
    increment() {
      this.count++
    }
  }
})
