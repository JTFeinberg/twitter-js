const express = require('express');
const app = express();
const nunjucks = require('nunjucks');

let locals = {
  title: 'An example',
  people: [
    {name: 'Gandalf'},
    {name: 'Frodo'},
    {name: 'Hermione'}
  ]
}

app.set('view engine', 'html'); // have res.render work with html files

app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', { noCache: true}); // point nunjucks to the proper directory for templates

// nunjucks.configure('views', { autoescape: true, express: app});
// nunjucks.render('index.html', locals, function(err, output){
//   if (err) throw err;
//   console.log(output);
// });


app.use(function(req, res, next){
    console.log(req.method, req.path, res.statusCode);
    next();
});

app.get('/', function(req, res){
    res.render('index.html', locals);
});

app.get('/news', function(req, res){
    res.send('this is the news');
});

app.listen(3000);
