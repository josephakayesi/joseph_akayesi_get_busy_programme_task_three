const router = require('express').Router()
const axios = require('axios')

class Home {
    constructor() {
        this.getRouter()
        this.getHome()
    }

    getRouter() {
        return router
    }

    // @route GET /
    // @desc Get Home View
    // @access Public
    getHome() {
        router.get('/', (req, res) => {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(posts => {
                    const postsData = posts.data
                    res.render('index', { postsData })
                })
                .catch(err => console.log(err))
        })
    }
}

module.exports = new Home()
