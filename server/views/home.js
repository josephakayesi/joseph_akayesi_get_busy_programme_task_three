const router = require('express').Router()
const axios = require('axios')

class Home {
    constructor() {
        this.getRouter()
        this.getHome()
        this.getNextPage()
        this.getPreviousPage()
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
                    const postsData = posts.data.slice(0, 10)
                    const currentPage = 0
                    let next = `/next/${Number(currentPage + 1)}`
                    let previous = `/previous/${(currentPage - 1)}`

                    return res.status(200).render('index', { postsData, next, previous })
                })
                .catch(err => console.log(err))
        })
    }

    // @route POST /next/:currentPage
    // @desc Go to next page
    // @access Public
    getNextPage() {
        router.get('/next/:currentPage', (req, res) => {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(posts => {
                    const { currentPage } = req.params
                    let begin = 0
                    let end = 10

                    if (currentPage < 10) {
                        let next = `/next/${Number(currentPage) + 1}`
                        let previous = `/previous/${Number(currentPage) - 1}`
                        begin += currentPage * 10
                        end += currentPage * 10
                        const postsData = posts.data.slice(begin, end)
                        return res.status(200).render('index', { postsData, next, previous })
                    }

                    if (currentPage >= 10) {
                        return res.status(200).redirect('back')
                    }
                })
                .catch(err => console.log(err))
        })
    }

    // @route POST /previous/:currentPage
    // @desc Go to previous page
    // @access Public
    getPreviousPage() {
        router.get('/previous/:currentPage', (req, res) => {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(posts => {
                    const { currentPage } = req.params
                    let begin = 0
                    let end = 10

                    if (currentPage > 0) {
                        let next = `/next/${Number(currentPage + 1)}`
                        let previous = `/previous/${Number(currentPage) - 1}`
                        begin += currentPage * 10
                        end += currentPage * 10
                        const postsData = posts.data.slice(begin, end)
                        return res.status(200).render('index', { postsData, next, previous })
                    }

                    if (currentPage <= 0) {
                        return res.status(200).redirect('/')
                    }
                })
                .catch(err => console.log(err))
        })
    }
}

module.exports = new Home()
