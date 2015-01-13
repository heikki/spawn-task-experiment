# Spawn task experiment

> Tests how fast it is to run gulp tasks in child processes

Run task in child process:

```
var makeItFaster = require('spawn-task-experiment').spawn;

gulp.task('whatever', makeItFaster(function() {

}));
```

Run task in worker pool:

```
var makeItFaster = require('spawn-task-experiment').workerPool();

gulp.task('whatever', makeItFaster(function() {

}));
```
