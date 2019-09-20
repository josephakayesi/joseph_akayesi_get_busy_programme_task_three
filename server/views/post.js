const router = require('express').Router()
const axios = require('axios')

class Post {
    constructor() {
        this.getRouter()
        this.getPost()
    }

    getRouter() {
        return router
    }

    // @route GET /
    // @desc Get Home View
    // @access Public
    getPost() {
        router.get('/:id', (req, res) => {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`)
                .then(post => {
                    const postData = post.data
                    res.render('post', { postData })
                })
                .catch(err => console.log(err))
        })
    }
}

module.exports = new Post()
