<script>
export default {
    data() {
        return {
            author: {
                name: 'John Doe',
                books: [
                    'Vue 2 - Advanced Guide',
                    'Vue 3 - Basic Guide',
                    'Vue 4 - The Mystery'
                ]
            }
        }
    },
    computed: {
        publishedBooksMessage() {
            return this.author.books.length > 0 ? 'Yes' : 'No'
        }
    },
    methods: {
        clearBooks() {
            this.author.books = []
        }
    }
}
</script>

<template>
    <p>Has published books:</p>
    <span>{{author.books.length > 0 ? 'YES' : 'NO'}}</span>
    <span>{{publishedBooksMessage}}</span>
    <button @click="clearBooks">CLEAR BOOKS</button>
</template>
