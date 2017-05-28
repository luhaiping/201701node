let express = require('express');
let app = express();
app.get('/clock',function(req,res){
  res.setHeader('Access-Control-Allow-Origin','http://localhost:63342');
  res.send(new Date().toLocaleString());
});
app.listen(8080);