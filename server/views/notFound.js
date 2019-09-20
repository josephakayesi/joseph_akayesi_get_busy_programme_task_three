const router = require('express').Router()

class NotFound {
    constructor() {
        this.getRouter()
        this.getNotFound()
    }

    getRouter() {
        return router
    }

    // @route GET /
    // @desc Get Home View
    // @access Public
    getNotFound() {
        router.get('/', (req, res) => {
            res.status(404).render('notFound')
        })
    }
}

module.exports = new NotFound()
