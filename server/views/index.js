const Home = require('./home').getRouter()

class Views {
    getViews() {
        return {
            Home,
        }
    }
}

module.exports = new Views()