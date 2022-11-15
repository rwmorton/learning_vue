<script setup>
import Search from './Search.vue'
import ProductList from './ProductList.vue'
import SearchError from './SearchError.vue'

defineProps({
    baseUrl: {
        type: String,
        required: true,
    },
    placeholder: {
        type: String,
        required: true,
    },
    noResultsTimeout: {
        type: Number,
        required: true,
    },
    // TEMP FOR TESTING
    state: {
        type: String,
        required: true
    }
})
</script>

<script>
export default {
    data() {
        return {
            products: [],
            query: 'laptop',
            // TEMP FOR TESTING
            error: false,
            noResults: false
        }
    },
    methods: {
        async fetchData() {
            const response = await fetch(`${this.baseUrl}${this.query}`)
            const json = await response.json()
            this.products = json.products
        },
        resetState() {
            this.error = false
            this.noResults = false
            this.products = []
        }
    },
    computed: {
        updateState() {
            this.resetState()

            switch(this.state) {
                case 'init':
                    console.log('setting to initial state')
                    break
                case 'search':
                    console.log('setting state to search results')
                    this.fetchData()
                    break
                case 'noresult':
                    console.log('setting state to no NOOOOOOOO search results')
                    this.noResults = true
                    break
                case 'error':
                    console.log('setting to error state')
                    this.error = true
                    break
                default:
                    break
            }
        }
    },
}
</script>

<template>
    <div class="w-full" v-bind="updateState">
        <div class="border border-1 rounded-xl border-gray-200 shadow-lg pb-0">
            <Search :baseUrl="baseUrl" :debounceTime="500" :placeholder="placeholder" :query="query" :noResultsTimeout="noResultsTimeout" />
            <ProductList :products="products" :noResultsTimeout="noResultsTimeout" :noResults.sync="noResults" />
            <SearchError :error="error" />
        </div>
    </div>
</template>
