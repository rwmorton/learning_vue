<script>
import {debounce} from 'lodash-es'

export default {
    created() {
        this.debouncedClick = debounce(this.click,1000)
    },
    unmounted() {
        this.debouncedClick.cancel()
    },
    methods: {
        click() {
            console.log('got debounced click...')
        }
    }
}
</script>

<template>
    <button @click="debouncedClick">CLICK ME!</button>
</template>
