const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const routes = require('./routes');



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

app.use('/', routes);

// app.use(function(req, res, next){
//     console.log(req.method, req.path, res.statusCode);
//     next();
// });



app.listen(3000);
