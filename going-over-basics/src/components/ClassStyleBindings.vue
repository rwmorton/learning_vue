<script>
export default {
    data() {
        return {
            isActive: true,
            error: null,
            activeColor: 'red',
            fontSize: 30,
            styleObject: {
                color: 'blue',
                fontSize: '20px'
            }
        }
    },
    methods: {
        toggle() {
            this.isActive = !this.isActive
        }
    },
    computed: {
        classObject() {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
            }
        }
    }
}
</script>

<template>
    <button :class="{active: isActive}">SOME BUTTON: {{isActive ? 'ACTIVE' : 'INACTIVE'}}</button>
    <div :class="classObject">SOME DIV WITH CLASS OBJECT</div>
    <button @click="toggle">Toggle</button>
    <p :style="{color: activeColor,fontSize: fontSize + 'px'}">bnding class to object</p>
    <p :style="styleObject">Anothe way</p>
</template>

<style>
.active {
    color: green;
}

.text-danger {
    color: red;
}
</style>
