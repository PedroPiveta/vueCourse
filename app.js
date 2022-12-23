const app = Vue.createApp({
    // data, functions
    // template: '<h2>I am a template</h2>'
    data() {
        return {
            url: 'http://www.thenetninja.co.uk',
            showBooks: true,
            books : [
                { title: 'name of the wind', author: 'patric rothfuss', img: 'assets/1.jpg' },
                { title: 'the way of the kings', author: 'bradon sanderson', img: 'assets/2.jpg'},
                { title: 'the final empire', author: 'bradon sanderson', img: 'assets/4.jpg'}
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