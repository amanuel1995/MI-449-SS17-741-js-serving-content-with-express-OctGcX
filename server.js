// declare variables
var express = require('express')
var app = express()
var port = process.env.PORT || 8080
var articles = {
  title: '',
  content: ''
}

// define the templating engine as ejs
app.set('view engine', 'ejs')

// allow declaring the name of a directory where we'll serve files
app.use(express.static('public'))

// function to serve the homepage route
app.get('/', function (request, response) {
  response.render('pages/index', {
    articles: articles
  })
})

// serve the about page route
app.get('/about', function (request, response) {
  response.render('pages/about', {
    articles: articles
  })
})

// serve the photos page route
app.get('/gallery', function (request, response) {
  response.render('pages/gallery', {
    articles: articles
  })
})

// serve the news page route
app.get('/news', function (request, response) {
  response.render('pages/news', {
    articles: articles
  })
})

app.listen(port)
