<script setup>
import {ref,onMounted} from 'vue'

// reactive state
const count = ref(0)

// functions taht mutate state and trigger updates
function increment() {
    count.value++
    console.log(count)
}

// lifecycle hooks
onMounted(() => {
    console.log(`The initial count is ${count.value}.`)
    console.log(count)
})
</script>

<template>
    <button @click="increment">Count is: {{count}}</button>
</template>
