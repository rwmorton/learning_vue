<script setup>
import {state} from '../state'

import Search from './Search.vue'
import ProductList from './ProductList.vue'
import NoSearchResult from './NoSearchResult.vue'
import SearchError from './SearchError.vue'
</script>

<script>
export default {
  data() {
    return state
  }
}
</script>

<template>
    <div class="w-full">
      <div :class="[
        state.products.length > 0 || state.status === 'error' || state.noResults
        ? `border border-1 rounded-xl border-gray-200 shadow-lg`
        : ''
      ]">
      <Search />
      <ProductList :products="state.products" :noResultsTimeout="1000" />
      <NoSearchResult v-show="state.noResults" />
      <SearchError v-show="state.status === 'error'" />
    </div>
  </div>
</template>
