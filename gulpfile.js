'use strict';

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var del = require('del');

var spawn = require('./lib/spawn');

gulp.task('clean', function(cb) {
	del(['dest'], cb);
});

// NORMAL

gulp.task('normal-task', function() {
	return gulp.src('node_modules/**/*.js')
		.pipe(sourcemaps.init())
		.pipe(concat('all.js'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dest'));
});

gulp.task('normal', gulp.series('clean',
	gulp.parallel('normal-task', 'normal-task')
));

// SPAWN

gulp.task('spawn-task', spawn(function() {
	var gulp = require('gulp');
	var sourcemaps = require('gulp-sourcemaps');
	var concat = require('gulp-concat');
	return gulp.src('node_modules/**/*.js')
		.pipe(sourcemaps.init())
		.pipe(concat('all.js'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dest'));
}));

gulp.task('spawn', gulp.series('clean',
	gulp.parallel('spawn-task', 'spawn-task')
));
