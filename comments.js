// Create web server
// Run this file using node comments.js
// Open http://localhost:3000 in your browser

var http = require('http');
var url = require('url');
var comments = [];

var server = http.createServer(function(req, res) {
  var urlParts = url.parse(req.url, true);
  var query = urlParts.query;
  var path = urlParts.pathname;

  if (path === '/addComment') {
    comments.push(query.comment);
    res.end('Comment added');
  } else if (path === '/getComments') {
    res.end(comments.join('\n'));
  } else {
    res.end('Invalid request');
  }
});

server.listen(3000);
console.log('Server running at http://localhost:3000');