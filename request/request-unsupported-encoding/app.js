var request = require('request');
var iconv = require('iconv-lite');

request({url:'http://news.163.com/', encoding: null}, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var str = iconv.decode(body, 'GBK');
        console.log(str);
    }
})
