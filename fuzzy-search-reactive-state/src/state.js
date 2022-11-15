import {reactive} from 'vue'

const initialState = {
    baseUrl: 'https://dummyjson.com/products/search?q=',
    query: '',
    products: [],
    status: 'idle',
    noResults: false,
    async fetchData() {
        if(this.query === '') {
          this.clearSearch()
          return
        }
  
        this.status = 'loading'
        try {
          const response = await fetch(`${this.baseUrl}${this.query}`)
          const json = await response.json()
          this.products = json.products
          this.status = 'idle'
          this.noResults = this.products.length > 0 ? false : true
        } catch(error) {
          this.status = 'error'
        }
    },
    clearSearch() {
        this.products = []
        this.query = ''
        this.noResults = false
        this.status = 'idle'
    },
    resetBaseUrl() {
      this.baseUrl = 'https://dummyjson.com/products/search?q='
    }
}

export const state = reactive(initialState)
