// declare variables
var express = require('express')
var app = express()
var port = process.env.PORT || 8080
var articles = {
}

var photo1 = '/img/pb-flash.png'
var photo2 = '/img/prison-break1.jpg'
var link1 = "https://en.wikipedia.org"
var link2 = "https://en.wikipedia.org/wiki/Prison_Break'"

// define the templating engine as ejs
app.set('view engine', 'ejs')

// allow declaring the name of a directory where we'll serve files
app.use(express.static('public'))

// function to serve the homepage route
app.get('/', function (request, response) {
  response.render('pages/index', {
  })
})

// serve the about page route
app.get('/about', function (request, response) {
  response.render('pages/about', {
  })
})

// serve the photos page route
app.get('/gallery', function (request, response) {
  response.render('pages/gallery', {
  })
})

// serve the news page route
app.get('/news', function (request, response) {
  response.render('pages/news', {
    articles: articles
  })
})

// function to create articlesfunction createArticle (article) {
function createArticle (article) {
  var id = Object.keys(articles).length
  article.createdAt = new Date()
  articles[id] = article
}

createArticle({
  title: 'Season 5 Premeires on April 4.',
  image: photo1,
  content: 'Filming on the new episodes was scheduled for the spring of 2016 once Purcell and Miller had wrapped on the first season of Legends of Tomorrow - a new spin-off from The Flash in which the pair were also series regulars (busy boys!). Prison Break season 5 will launch on Fox in the US. The premiere date? Tuesday, April 4, 2017, as part of the network\'s midseason schedule. Lincoln and Sara work together to track down Michael after certain evidence suggests that he could still be alive, which takes Lincoln over to Yemen. read more at ',
  link: link1
})

createArticle({
  title: 'Prison Break is back on our screens years after the original came to an end',
  image: photo2,
  content: 'The new series begins with Miller acknowledging this: "I died seven years ago," he says before going on to talk about freedom then the all important discovery by his brother Lincoln, that Michael may actually be alive and in Yemen prison. Read more at ',
  link: link2
})

app.listen(port)
