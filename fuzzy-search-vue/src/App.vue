<script setup>
import FuzzySearch from './components/FuzzySearch.vue'

import Product from './components/Product.vue'
import SearchError from './components/SearchError.vue'
import NoSearchResult from './components/NoSearchResult.vue'
</script>

<script>
export default {
  data() {
    return {
      timeout: 1000,
      BASE_URL: 'https://dummyjson.com/products/search?q=',
      btnClassName: "bg-blue-600 text-white px-2 py-1 rounded-md mx-4",
      baseUrl: 'https://dummyjson.com/products/search?q='
    }
  },
  methods: {
    toggleTimeout() {
      this.timeout = this.timeout === 1000 ? 100000 : 1000
    },
    resetBaseUrl() {
      this.baseUrl = this.BASE_URL
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
    />

    <br />
    <Product
      brand="product_brand"
      image="https://dummyjson.com/image/i/products/1/thumbnail.jpg"
      name="product_name"
      :price="100"
      :rating="5"
    />

    <br />
    <SearchError />

    <br />
    <NoSearchResult />

    <!-- {/* ////////////////////////////////////////////// */} -->

    </div>
  </div>
</template>
