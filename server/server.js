const express = require('express')
const app = express()
const path = require('path')
const Middleware = require('./config/middleware')
const Views = require('./views/index')

// Handlebars Middleware
const hbs = Middleware.Handlebars().createInstance

// Template Engine Middleware
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, '../client/views'))

//Static folder
app.use(express.static(path.join(__dirname, '../client/public')))

// Use view
app.use('/', Views.getViews().Home)
app.use('/post', Views.getViews().Post)
app.use('*', Views.getViews().NotFound)

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server listening on port ${port}`))