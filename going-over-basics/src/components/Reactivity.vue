<script>
import {nextTick} from 'vue'
import {debounce} from 'lodash-es'

export default {
    data() {
        return {
            someObject: {},
            count: 0,
            obj: {
                nested: {count: 0},
                arr: ['foo','bar']
            }
        }
    },
    mounted() {
        const newObject = {}
        this.someObject = newObject

        console.log(newObject === this.someObject)
    },
    methods: {
        increment() {
            this.count++
            nextTick(() => {
                // access updated DOM
            })
        },
        mutateDeeply() {
            this.obj.nested.count++
            this.obj.arr.push('baz')
        },
        click: debounce(function() {
            //
            console.log('got debounced click...')
        },1000)
    }
}
</script>

<template>
    <ul>
        <li v-for="a in obj.arr" :key="a">
            {{a}}
        </li>
    </ul>
    <p>nested count = {{obj.nested.count}}</p>
    <button @click="mutateDeeply">deep mutate</button>
    <button @click="click">DEBOUNCE</button>
</template>
