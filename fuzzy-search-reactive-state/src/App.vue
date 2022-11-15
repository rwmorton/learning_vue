<script setup>
import FuzzySearch from './components/FuzzySearch.vue'
import {state} from './state'
</script>

<script>
export default {
  data() {
    return {
      ...state,
      btnClassName: "bg-blue-600 text-white px-2 py-1 rounded-md mx-4",
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
      <input v-model="state.baseUrl" class="border border-1 border-gray-500 m-4" type="text" />
      <button @click="state.resetBaseUrl" :class="btnClassName">RESET</button>
      <p class="my-4">Base url: {{baseUrl}}</p>
      <hr class="border border-1 border-black" />
    </div>
    <div class="my-8">

    <!-- {/* ////////////////////////////////////////////// */} -->
    <!-- {/* //////////////// FUZZY SEARCH //////////////// */} -->
    <!-- {/* ////////////////////////////////////////////// */} -->

    <FuzzySearch />

    <!-- {/* ////////////////////////////////////////////// */} -->

    </div>
  </div>
</template>
