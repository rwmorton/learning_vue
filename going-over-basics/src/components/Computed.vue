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
            },
            firstName: 'John',
            lastName: 'Doe'
        }
    },
    computed: {
        publishedBooksMessage() {
            return this.author.books.length > 0 ? 'Yes' : 'No'
        },
        fullName: {
            get() {
                return this.firstName + ' ' + this.lastName
            },
            set(newValue) {
                [this.firstName,this.lastName] = newValue.split(' ')
            }
        }
    },
    methods: {
        clearBooks() {
            this.author.books = []
        },
        test() {
            this.fullName = "Jane Doe"
        }
    }
}
</script>

<template>
    <p>Has published books:</p>
    <span>{{author.books.length > 0 ? 'YES' : 'NO'}}</span>
    <span>{{publishedBooksMessage}}</span>
    <button @click="clearBooks">CLEAR BOOKS</button>
    <p>Fullname: {{fullName}}</p>
    <button @click="test">TEST</button>
</template>
