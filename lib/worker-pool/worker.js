// jshint evil: true

'use strict';

var asyncDone = require('async-done');

// var cache = {};

// function parseFn(str) {
// 	if (!cache[str]) {
// 		cache[str] = eval('(' + str + ')');
// 	}
// 	return cache[str];
// }

module.exports = function(code, cb) {
	var fn = eval('(' + code + ')'); //parseFn(code);
	asyncDone(fn, cb);
};
