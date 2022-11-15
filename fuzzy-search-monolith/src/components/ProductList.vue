<script setup>
import NoSearchResult from './NoSearchResult.vue'
import Product from './Product.vue'

defineProps({
    products: {
        type: Array,
        required: true
    },
    noResultsTimeout: {
        type: Number,
        required: true,
    }
})
</script>

<template>
    <div class="px-2 w-full py-2">
        <div class="">
            <ul>
                <li
                    v-for="product in products"
                    :key="product.id"
                >
                    <Product :product="product" />
                </li>
            </ul>
        </div>
    </div>
</template>
