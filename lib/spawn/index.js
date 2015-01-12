'use strict';

var cp = require('child_process');

module.exports = function(fn) {
	var code = fn.toString();
	return function() {
		var worker = cp.spawn(
			process.execPath, [require.resolve('./worker')],
			{ stdio: [ 'pipe', 1, 2 ] }
		);
		worker.stdin.end(code);
		return worker;
	};
};
