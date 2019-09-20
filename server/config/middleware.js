class Middleware {
    constructor() {
        this.exphbs = require('express-handlebars')
    }

    Handlebars() {
        return {
            createInstance: this.exphbs.create({
                defaultLayout: 'main',
                layoutsDir: '../client/views/layouts',
            })
        }
    }
}

module.exports = new Middleware()