var express = require('express');
var nameDB = require('./name-db');
var _s = require('underscore.string');
var server;

var start = exports.start = function start(port, callback) {
	server = app.listen(port, callback);
};
var stop = exports.stop = function stop(callback) {
	server.close(callback);
};

var app = express();

app.get(
	'/hello',
	function sendResponse(req, res) {
		res.status(200).send('Hello world!');
	}
);
app.get(
	'/greetings',
	function sendResponse(req, res) {
		var names = nameDB.getRandomNames(3);
		var greeting = 'Greetings from ' + _s.toSentenceSerial(names) + '!';
		res.status(200).send(greeting);
	}
);