<script setup>
import {XCircleIcon} from '@heroicons/vue/20/solid'
</script>

<script>
import {debounce} from 'lodash-es'

import {state} from '../state'

export default {
    data() {
        return state
    },
    methods: {
        clearSearchAndFocus() {
            state.clearSearch()
            this.$refs.search.focus() // focus the input
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
    <!-- SEARCH INPUT -->
    <div class="relative">
        <!-- {/* SEARCH ICON */} -->
        <div
            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
        >
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
        <label for="search-input">
            <input
                ref="search"
                type="search"
                id="search-input"
                v-model="query"
                aria-label="Search products"
                placeholder="Search products..."
                class="block p-2 pl-10 w-full text-sm text-black bg-white rounded-xl font-medium"
                :class="[
                    (state.products.length > 0 && state.status === 'idle') || state.status === 'error' || state.noResults
                    ? `focus:outline-none`
                    : `rounded-xl border-gray-300 border border-1
                            focus:ring-indigo-500 focus:border-indigo-500
                            focus:border-2 focus:border-indigo-600
                            focus:outline outline-offset-0 outline-4 outline-indigo-300`
                    ]"
            />
        </label>
        <!-- {/* SPINNER */} -->
        <div
            v-show="state.status == 'loading'"
            role="alert"
            aria-live="assertive"
            aria-busy="true"
        >
            <div role="status" class="absolute right-3 bottom-2.5">
                <div class="w-5 h-5 rounded-full animate-spin border-2 border-solid border-indigo-600 border-t-transparent">
                <!-- TEMP -->
                </div>
            </div>
        </div>
        <!-- {/* CLEAR ICON */} -->
        <div
            v-show="(state.status !== 'loading' && state.products.length > 0) || state.status === 'error' || state.noResults"
            role="clear"
            aria-roledescription="Clear search results"
            aria-busy="false"
        >
            <div class="absolute right-3.5 bottom-1.5">
                <button type="submit" @click="clearSearchAndFocus">
                    <XCircleIcon class="text-red-600 w-4" />
                </button>
            </div>
        </div>
    </div>
</template>
