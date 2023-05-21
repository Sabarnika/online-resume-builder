var module = require('./dbmodule');
var url = require('url');
var querystring = require('querystring');
var http = require('http');

http
  .createServer(function (request, response) {
    var data1 = '';

    request.on('data', function (chunk) {
      data1 += chunk;
    });

    request.on('end', function () {
      var username = querystring.parse(data1)['username'];
      console.log(username);
      var email = querystring.parse(data1)['email'];
      console.log(email);
      var phone = querystring.parse(data1)['phone'];
      console.log(phone);
      var pass = querystring.parse(data1)['pass'];
      console.log(pass);
      var cpass = querystring.parse(data1)['cpass'];
      console.log(cpass);

      if (request.url === '/login') {
        module.authenticateUser(username, pass, response);
      } else if (request.url === '/save') {
        module.saveUser(username, email, phone, pass, cpass, response);
      }
    });
  })
  .listen(3000);
console.log('Server started');
