let mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/201701node');
let User = mongoose.model('User',new mongoose.Schema({
    name:String,
    age:Number
}));
let users = [];
for(let i=0;i<10;i++){
    users.push({name:`zfpx${i}`,age:i});
}
User.create(users,function(err,docs){
    console.log(docs);
});