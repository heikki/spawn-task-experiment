# Spawn task experiment

> Tests how fast it is to run gulp tasks in child processes

Run task in child process:

```js
var makeItFaster = require('spawn-task-experiment').spawn;

gulp.task('whatever', makeItFaster(function() {
	var gulp = require('gulp');
	var sourcemaps = require('gulp-sourcemaps');
	var concat = require('gulp-concat');
	return gulp.src(['app/index.js', 'app/**/*.js'])
		.pipe(sourcemaps.init())
		.pipe(concat('all.js'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('.build/scripts'));
}));
```

Run task in worker pool:

```js
var makeItFaster = require('spawn-task-experiment').workerPool();

gulp.task('whatever', makeItFaster(function() {
	var gulp = require('gulp');
	var sourcemaps = require('gulp-sourcemaps');
	var concat = require('gulp-concat');
	return gulp.src(['app/index.js', 'app/**/*.js'])
		.pipe(sourcemaps.init())
		.pipe(concat('all.js'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('.build/scripts'));
}));
```

**Notes:**

- All wrapped functions need to be self-contained
- Using worker pool prevents parent process exit, so it might be usable only when watch is running
- Worker pool starts re-using child processes only after [maxConcurrentWorkers](https://github.com/rvagg/node-worker-farm#options) limit has been reached (default is `cpus().length`)
