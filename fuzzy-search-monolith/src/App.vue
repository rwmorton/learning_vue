<script setup>
import FuzzySearch from './components/FuzzySearch.vue'
</script>

<script>
export default {
  data() {
    return {
      btnClassName: "bg-blue-600 text-white px-2 py-1 rounded-md mx-4",
      baseUrl: 'https://dummyjson.com/products/search?q=',
    }
  },
  methods: {
    toggleTimeout() {
      this.timeout = this.timeout === 1000 ? 100000 : 1000
    },
    resetBaseUrl() {
      this.baseUrl = 'https://dummyjson.com/products/search?q='
    }
  }
}
</script>

<template>
  <div class="container items-center mx-auto max-w-3xl my-8">
    <h1>Fuzzy Search Component Demo</h1>
    <i>* Only set up on products endpoint</i>
    <div class="my-4">
      <label>Change base url to force error</label>
      <input v-model="baseUrl" class="border border-1 border-gray-500 m-4" type="text" />
      <button @click="resetBaseUrl" :class="btnClassName">RESET</button>
      <p class="my-4">Base url: {{baseUrl}}</p>
      <hr class="border border-1 border-black" />
    </div>
    <div class="my-8">

    <!-- {/* ////////////////////////////////////////////// */} -->
    <!-- {/* //////////////// FUZZY SEARCH //////////////// */} -->
    <!-- {/* ////////////////////////////////////////////// */} -->

    <FuzzySearch :baseUrl="baseUrl" />

    <!-- {/* ////////////////////////////////////////////// */} -->

    </div>
  </div>
</template>
