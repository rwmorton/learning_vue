<script setup>
import {debounce} from 'lodash-es'

import {XCircleIcon} from '@heroicons/vue/20/solid'

import ProductList from './ProductList.vue'
import NoSearchResult from './NoSearchResult.vue'
import SearchError from './SearchError.vue'

defineProps({
    baseUrl: {
        type: String,
        required: true
    }
})
</script>

<script>
export default {
  data() {
    return {
      query: '',
      products: [],
      status: 'idle', // idle, loading, error
      noResults: false
    }
  },
  methods: {
    async fetchData() {
      if(this.query === '') {
        this.clearSearch()
        return
      }

      this.status = 'loading'
      try {
        const response = await fetch(`${this.baseUrl}${this.query}`)
        const json = await response.json()
        this.products = json.products
        this.status = 'idle'
        this.noResults = this.products.length > 0 ? false : true
      } catch(error) {
        this.status = 'error'
      }
    },
    clearSearch() {
      this.products = []
      this.query = ''
      this.noResults = false
      this.status = 'idle'
    }
  },
  watch: {
    query(...args) {
      this.debouncedQuery(...args)
    }
  },
  created() {
    this.debouncedQuery = debounce((newQuery,_) => {
      this.query = newQuery
      this.fetchData()
    },500)
  },
  beforeUnmount() {
    this.debouncedQuery.cancel()
  }
}
</script>

<template>
    <div class="w-full">
      <div :class="[
        products.length > 0 || status === 'error' || noResults
        ? `border border-1 rounded-xl border-gray-200 shadow-lg`
        : ''
      ]">
        <!-- SEARCH INPUT -->
        <div class="relative">
            <!-- {/* SEARCH ICON */} -->
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>
            <!-- {/* INPUT */} -->
            <input
                v-model="query"
                type="text"
                placeholder="Search products..."
                class="block p-2 pl-10 w-full text-sm text-black bg-white rounded-xl font-medium"
                :class="[
                  (products.length > 0 && status === 'idle') || status === 'error' || noResults
                    ? `focus:outline-none`
                    : `rounded-xl border-gray-300 border border-1
                          focus:ring-indigo-500 focus:border-indigo-500
                          focus:border-2 focus:border-indigo-600
                          focus:outline outline-offset-0 outline-4 outline-indigo-300`
                  ]"
            />
            <!-- {/* SPINNER */} -->
            <div v-show="status == 'loading'">
                <div role="status" class="absolute right-3 bottom-2.5">
                    <div class="w-5 h-5 rounded-full animate-spin border-2 border-solid border-indigo-600 border-t-transparent">
                    <!-- TEMP -->
                    </div>
                </div>
            </div>
            <!-- {/* CLEAR ICON */} -->
            <div v-show="(status !== 'loading' && products.length > 0) || status === 'error' || noResults">
                <div class="absolute right-3.5 bottom-1.5">
                    <button type="submit" @click="clearSearch">
                        <XCircleIcon class="text-red-600 w-4" />
                    </button>
                </div>
            </div>
        </div>

        <ProductList :products="products" :noResultsTimeout="1000" />
        <NoSearchResult v-show="noResults" />
        <SearchError v-show="status === 'error'" />
      </div>
    </div>
</template>
