const pkg = require('./package')


module.exports = {
    mode: 'universal',

    /*
     ** Headers of the page
     */
    head: {
        title: pkg.name,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: pkg.description }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
        script: [
            { src: 'material-pro-js/jquery.min.js' },
            { src: 'material-pro-js/popper.min.js' },
            { src: 'material-pro-js/bootstrap.min.js' },
            { src: 'material-pro-js/jquery.slimscroll.js' },
            { src: 'material-pro-js/waves.js' },
            { src: 'material-pro-js/sidebarmenu.js' },
            { src: 'material-pro-js/sticky-kit.min.js' },
            { src: 'material-pro-js/custom.min.js' }
        ]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#3b8070' },

    /*
     ** Global CSS
     */
    css: [
        "~/assets/css/bootstrap.min.css",
        "~/assets/css/style.css",
        "~/assets/css/colors/blue.css",
        "~/assets/css/animate.css",
        "~/assets/css/spinners.css",
        "~/assets/css/form.css"
    ],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],

    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios'
    ],
    /*
     ** Axios module configuration
     */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },

    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {

        }
    }
}