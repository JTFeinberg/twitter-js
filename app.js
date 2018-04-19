const express = require('express');
const app = express();

 
app.use(function(req, res, next){
    console.log(req.method, req.path, res.statusCode);
    next();
});

app.get('/', function(req, res){
    res.send('server listening');
}); 

app.get('/news', function(req, res){
    res.send('this is the news');
});




app.listen(3000);


//console.log('server listening');