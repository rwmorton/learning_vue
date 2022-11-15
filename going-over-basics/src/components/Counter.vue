<script>
export default {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        increment() {
            this.count = this.count + 1
        },
        decrement() {
            this.count = this.count - 1
        }
    }
}
</script>

<template>
    <div>
        <button @click="increment">INCREMENT</button>
        <button @click="decrement">DECREMENT</button>
        <p>Count: {{count}}</p>
    </div>
</template>
