<script setup>
import {StarIcon} from '@heroicons/vue/20/solid'

defineProps({
    product: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <div class="flex px-4 py-2 w-full">
        <!-- {/* IMAGE */} -->
        <div class="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
            <img
                :src="product.thumbnail"
                :alt="product.title"
                class="h-full w-full object-cover object-center"
            />
        </div>

        <!-- {/* INFO */} -->
        <div class="ml-4 flex flex-1 flex-col">
            <!-- {/* NAME AND PRICE */} -->
            <div>
                <div class="flex justify-between text-base font-bold text-gray-900">
                    <h3>{{product.title}}</h3>
                    <p class="text-sm font-medium text-gray-500">${{product.price.toFixed(2)}}</p>
                </div>
                <!-- {/* BRAND AND RATING */} -->
                <div>
                    <div class="flex justify-between text-base font-medium text-gray-900">
                        <p class="mt-1 text-sm text-gray-500">{{product.brand}}</p>
                        <div class="ml-4">
                            <div class="flex items-center">
                                <StarIcon
                                    v-for="r in [0,1,2,3,4]"
                                    :key="r"
                                    :class="[product.rating > r ? 'text-yellow-400' : 'text-gray-200', 'h-5 w-5 flex-shrink-0']"
                                    aria-hidden="true"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
