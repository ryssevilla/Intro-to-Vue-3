const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 1234, color: 'red' },
                { id: 1235, color: 'blue' },
            ],
            sizes : [
                { id: 'sds', sizess: 'small' },
                { id: 13, sizess: 'medium' },
                { id: 14, sizess: 'large' },
            ]
        }
    }
})
