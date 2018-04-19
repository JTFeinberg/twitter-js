const express = require('express');
const app = express();








app.get('/', function(req, res){
    res.send('server listening');
}); 

app.listen(3000);


//console.log('server listening');