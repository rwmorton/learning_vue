<script setup>
import Search from './Search.vue'

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
            //
        }
    },
    methods: {
        //
    },
    computed: {
        //
    }
}
</script>

<template>
    <div class="w-full">
        <div class="border border-1 rounded-xl border-gray-200 shadow-lg pb-0">
            <Search :baseUrl="baseUrl" :debounceTime="500" :placeholder="placeholder" />
            <!-- <ProductList products={state.results?.map((item: any) => item.item)} noResultsTimeout={noResultsTimeout} /> -->
            <!-- <SearchError /> -->
        </div>
    </div>
</template>
