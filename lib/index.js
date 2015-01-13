'use strict';

var spawn = require('./lib/spawn');
var workerPool = require('./lib/worker-pool');

var stayAlive = false;

module.exports = function(fn) {
	if (stayAlive) {
		return workerPool(fn);
	} else {
		return spawn(fn);
	}
};

module.exports.stayAlive = function(conf) {

};
