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
            axios.get('http://www.somaku.com/users/1')
                .then(user => {
                    const userData = user.data
                    res.render('index', { userData })
                })
                .catch(err => console.log(err))
        })
    }
}

module.exports = new Home()
