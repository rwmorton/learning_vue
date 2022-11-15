<script>
export default {
    data() {
        return {
            myObject: {
                title: 'How to do lists in Vue',
                author: 'Jane Doe',
                publishedAt: '2016-04-10'
            }
        }
    }
}
</script>

<template>
    <ul>
        <li v-for="value in myObject">
        {{value}}</li>
    </ul>
</template>
