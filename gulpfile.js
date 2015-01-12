'use strict';

var gulp = require('gulp');
var del = require('del');

var spawn = require('./lib/spawn');
var workerPool = require('./lib/worker-pool');

gulp.task('clean', function(cb) {
	del(['dest'], cb);
});

function taskFn() {
	var gulp = require('gulp');
	var sourcemaps = require('gulp-sourcemaps');
	var concat = require('gulp-concat');
	return gulp.src('node_modules/**/*.js')
		.pipe(sourcemaps.init())
		.pipe(concat('all.js'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dest'));
}

// NORMAL

gulp.task('normal-task', taskFn);

gulp.task('normal', gulp.series('clean',
	gulp.parallel('normal-task', 'normal-task')
));

// SPAWN

gulp.task('spawn-task', spawn(taskFn));

gulp.task('spawn', gulp.series('clean',
	gulp.parallel('spawn-task', 'spawn-task')
));

// WORKER POOL

gulp.task('worker-pool-task', workerPool(taskFn));

gulp.task('worker-pool', gulp.series('clean',
	gulp.parallel('worker-pool-task', 'worker-pool-task')
));

// WATCH

gulp.task('watch', function() {
	// gulp.watch('*.js', 'normal');
	// gulp.watch('*.js', 'spawn');
	gulp.watch('*.js', 'worker-pool');
});
