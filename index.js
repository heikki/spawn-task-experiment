'use strict';

var spawn = require('./lib/spawn');
var workerPool = require('./lib/worker-pool');

module.exports = {
	spawn: spawn,
	workerPool: workerPool
};
