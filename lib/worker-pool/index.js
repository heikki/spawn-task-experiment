'use strict';

var farm = require('worker-farm');

// https://github.com/rvagg/node-worker-farm#options

module.exports = function(options) {

	var workers = farm(options, require.resolve('./worker'));

	// process.on('exit', function() {
	// 	farm.end(workers);
	// });

	return function(fn) {
		var code = fn.toString();
		return function(cb) {
			workers(code, cb);
		};
	};
};
