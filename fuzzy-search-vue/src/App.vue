<script setup>
import FuzzySearch from './components/FuzzySearch.vue'
</script>

<script>
export default {
  data() {
    return {
      timeout: 1000,
      BASE_URL: 'https://dummyjson.com/products/search?q=',
      btnClassName: "bg-blue-600 text-white px-2 py-1 rounded-md mx-4",
      baseUrl: 'https://dummyjson.com/products/search?q=',
      // TEMP FOR TESTING
      state: ['init','search','noresult','error'],
      stateIndex: 0,
      selectedState: 'init'
    }
  },
  methods: {
    toggleTimeout() {
      this.timeout = this.timeout === 1000 ? 100000 : 1000
    },
    resetBaseUrl() {
      this.baseUrl = this.BASE_URL
    },
    // TEMP FOR TESTING
    nextState() {
      const nextIndex = this.stateIndex + 1
      this.stateIndex = nextIndex > 3 ? 0 : nextIndex
      this.selectedState = this.state[this.stateIndex]
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
      <div class="flex flex-row items-center pb-4">
        <p>Timeout: {{timeout / 1000}}s</p>
        <button @click="toggleTimeout" :class="btnClassName">
          TOGGLE TIMEOUT
        </button>
        <i>* Defaults to 1 second to see the effect quicker.</i>
      </div>

      <!-- //////////////////////////////////////////////////////////////////// -->
      <!-- ///////////////////////// TEMP FOR TESTING ///////////////////////// -->
      <!-- //////////////////////////////////////////////////////////////////// -->
      <button @click="nextState" :class="btnClassName">NEXT STATE</button>
      <p>Current state = {{stateIndex}} ({{state[stateIndex]}})</p>
      <!-- //////////////////////////////////////////////////////////////////// -->

      <hr class="border border-1 border-black" />
    </div>
    <div class="my-8">

    <!-- {/* ////////////////////////////////////////////// */} -->
    <!-- {/* //////////////// FUZZY SEARCH //////////////// */} -->
    <!-- {/* ////////////////////////////////////////////// */} -->

    <FuzzySearch
      :baseUrl="baseUrl"
      placeholder="Search products..."
      :noResultsTimeout="timeout"
      :state="selectedState"
    />

    <!-- {/* ////////////////////////////////////////////// */} -->

    </div>
  </div>
</template>
