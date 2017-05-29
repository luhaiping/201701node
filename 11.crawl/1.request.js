//是一个node模块，可以做为node客户端请求服务器资源
let request = require('request');
let cheerio = require('cheerio');
let iconv = require('iconv-lite');
//真正得到的是二进制，然后需要转码后才会是字符串
//默认是用utf8编码转换的
request({url:'http://top.baidu.com/category?c=1&fr=topindex',encoding:null},function(err,response,body){
   // err错误对象 response 响应对象 body响应体
    body = iconv.decode(body,'gbk');
    let $ = cheerio.load(body);
    $('.hd .title a').each(function(index,item){
        console.log(item);
        let $this = $(item);
        let category = {
            name:$this.text(),
            url:$this.attr('href')
        }
        console.log(category);
    })

});
