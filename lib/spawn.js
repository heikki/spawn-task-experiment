'use strict';

var cp = require('child_process');
var path = require('path');

module.exports = function(fn) {
	var code = fn.toString();
	return function() {
		var worker = cp.spawn(
			process.execPath, [path.join(__dirname, 'worker.js')],
			{ stdio: [ 'pipe', 1, 2 ] }
		);
		worker.stdin.end(code);
		return worker;
	};
};
