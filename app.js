const app = Vue.createApp({
    // data, functions
    // template: '<h2>I am a template</h2>'
    data() {
        return {
            showBooks: true,
            books : [
                { title: 'name of the wind', author: 'patric rothfuss'},
                { title: 'the way of the kings', author: 'bradon sanderson'},
                { title: 'the final empire', author: 'bradon sanderson'}
            ],
            x: 0,
            y: 0
        }
    },
    methods: {
        changeTitle(title) {
            // this.title = "Words of Radiance"
            this.title = title
        },
        
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMouseMove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        },
    }
})

app.mount('#app')