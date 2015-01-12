'use strict';

var farm = require('worker-farm');
var workers = farm(require.resolve('./worker'));

// process.on('exit', function() {
// 	farm.end(workers);
// });

module.exports = function(fn) {
	var code = fn.toString();
	return function(cb) {
		workers(code, cb);
	};
};
