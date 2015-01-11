// jshint evil: true

'use strict';

var code = '';

process.stdin.on('data', function(data) {
	code += data;
});

process.stdin.on('end', function() {
	eval('(' + code + ')')();
});
