<script setup>
defineProps({
    products: {
        type: Array,
        required: true
    },
    noResultsTimeout: {
        type: Number,
        required: true
    }
})
</script>

<script>
export default {
    data() {
        return {
            //
        }
    }
}
</script>

<template>
    <div class="px-2 w-full py-2">
        <div class="">
            <ul>
                <!-- {(products?.length === 0) && <NoSearchResult :liveFor="noResultsTimeout" />}
                {products?.map(product => (
                    <li key={product.id}>
                        <Product product={product}/>
                    </li>
                ))} -->
            </ul>
        </div>
    </div>
</template>
