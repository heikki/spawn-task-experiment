'use strict';

var farm = require('worker-farm');

// https://github.com/rvagg/node-worker-farm#options

module.exports = function(options) {

	var workers = farm(options, require.resolve('./worker'));

	return function(fn, optns) {
		var code = fn.toString();
		var params = JSON.stringify({
			options: optns,
			fn: code
		});
		return function(cb) {
			workers(params, cb);
		};
	};
};
