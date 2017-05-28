let express = require('express');
let app = express();
let startTime = Date.now();
app.get('/clock',function(req,res){
  res.setHeader('Access-Control-Allow-Origin','http://localhost:63342');
  res.send(new Date().toLocaleString());
  console.log(Date.now() - startTime);
    startTime = Date.now();
});
let path = require('path');
app.get('/',function(req,res){
  res.sendFile(path.resolve('./3.iframe.html'));
});
app.get('/clock2',function(req,res){
  setInterval(function(){
      let html = `
  <script>
    window.parent.changeTime('${new Date().toLocaleString()}')
    </script>
  `;
      res.write(html);
  },1000)
  //res.send(html); //end
});
app.listen(8080);