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
    }
})
</script>

<script>
export default {
    data() {
        return {
            products: []
        }
    },
    methods: {
        async fetchData() {
            const response = await fetch(this.baseUrl)
            const json = await response.json()
            this.products = json.products
        }
    },
    computed: {
        //
    },
    created() {
        this.fetchData()
    }
}
</script>

<template>
    <div class="w-full">
        <div class="border border-1 rounded-xl border-gray-200 shadow-lg pb-0">
            <Search :baseUrl="baseUrl" :debounceTime="500" :placeholder="placeholder" />
            <ProductList :products="products" :noResultsTimeout="noResultsTimeout" />
            <!-- <SearchError /> -->
        </div>
    </div>
</template>
