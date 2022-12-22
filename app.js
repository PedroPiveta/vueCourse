const app = Vue.createApp({
    // data, functions
    // template: '<h2>I am a template</h2>'
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45 
        }
    },
    methods: {
        changeTitle(title) {
            // this.title = "Words of Radiance"
            this.title = title
        },
        
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')