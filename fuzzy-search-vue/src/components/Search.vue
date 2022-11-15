<script>
export default {
    data() {
        return {
            placeholder: 'Search products...',
        }
    },
    methods: {
        handleChange() {
            //
        },
        clearSearch() {
            //
        }
    }
}
</script>

<template>
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
            v-model="handleChange"
            type="text"
            placeholder="placeholder"
            class="
                block p-2 pl-10 w-full text-sm
                text-black bg-white rounded-xl font-medium
                rounded-xl border-gray-300 border border-1
                focus:ring-indigo-500 focus:border-indigo-500
                focus:border-2 focus:border-indigo-600
                focus:outline outline-offset-0 outline-4 outline-indigo-300
            "
        />
        <!-- {/* SPINNER */} -->
        <!-- {state.status == 'loading' && -->
            <div role="status" class="absolute right-2 bottom-2.5">
                <div class="w-5 h-5 rounded-full animate-spin border-2 border-solid border-indigo-600 border-t-transparent">
                <!-- TEMP -->
                </div>
            </div>
        }
        <!-- {/* CLEAR ICON */} -->
        <!-- {((state.status !== 'loading' && state.results) || state.status === 'error') && -->
            <div class="absolute right-2 bottom-1.5">
                <button type="submit" @click="clearSearch">
                    <!-- <RiCloseCircleFill class="text-red-600" /> -->
                </button>
            </div>
        }
    </div>
</template>
