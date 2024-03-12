// Create web server
// 1. Create a web server
// 2. Create an array to store comments
// 3. Create a function to handle the request
// 4. Create a function to handle the response
// 5. Create a function to handle the POST request
// 6. Create a function to handle the GET request
// 7. Add the comments to the response

// 1. Create a web server
var http = require('http');
var fs = require('fs');
var path = require('path');
var comments = [];

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        handlePost(req, res);
    } else if (req.method === 'GET') {
        handleGet(req, res);
    }
});

server.listen(3000, function () {
    console.log('Listening on port 3000');
});

// 3. Create a function to handle the request
function handlePost(req, res) {
    var body = '';

    req.on('data', function (chunk) {
        body += chunk;
    });

    req.on('end', function () {
        var data = JSON.parse(body);
        comments.push(data);
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Success');
    });
}

// 4. Create a function to handle the response
function handleGet(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(comments));
}

// 5. Create a function to handle the POST request
function handlePost(req, res) {
    var body = '';

    req.on('data', function (chunk) {
        body += chunk;
    });

    req.on('end', function () {
        var data = JSON.parse(body);
        comments.push(data);
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Success');
    });
}

// 6. Create a function to handle the GET request
function handleGet(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(comments));
}

// 7. Add the comments to the response
// 8. Create a function to handle the POST request
// 9. Create a function to