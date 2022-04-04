const express = require('express');
 const favicon = require('express-favicon');
 const path = require('path');
 const port = process.env.PORT || 8080;
 
 // здесь у нас происходит импорт пакетов и определяется порт нашего сервера
 const app = express();
 app.use(favicon(__dirname + '/build/favicon.ico')); 
 
 //здесь наше приложение отдаёт статику
 app.use(express.static(__dirname));
 app.use(express.static(path.join(__dirname, 'build')));
 
 //простой тест сервера
 app.get('/ping', function (req, res) {
  return res.send('pong');
 });
 
 //обслуживание html
 app.get('/google63f22d69b9da230a.html',(req, res)=> {
    res.send("google-site-verification: google63f22d69b9da230a.html");
 });

 app.get('/sitemap',(req, res)=> {
   res.sendFile(__dirname, "sitemap.xml" );
});

 app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
 });

 app.listen(port);

 const http = require("http");
 setInterval(function() {
     http.get("http://portfolio--test.herokuapp.com");
     console.log("Перезапуск сервера")
 }, 1200000); 