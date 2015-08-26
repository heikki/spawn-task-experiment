// jshint evil: true

'use strict';

var asyncDone = require('async-done');

var cache = {};

function parseFn(str) {
	if (!cache[str]) {
		cache[str] = eval('(' + str + ')');
	}
	return cache[str];
}

module.exports = function(optns, cb) {
	optns = JSON.parse(optns);
	var code = optns.fn;
	var fn = parseFn(code).bind(optns.options);
	asyncDone(fn, cb);
};
