const Home = require('./home').getRouter()
const Post = require('./post').getRouter()
const NotFound = require('./notFound').getRouter()

class Views {
    getViews() {
        return {
            Home,
            Post,
            NotFound
        }
    }
}

module.exports = new Views()