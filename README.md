# Spawn task experiment

> Tests how fast it is to run gulp tasks in child processes

Normal:

```
∴ spawn-task-experiment git:(master) ./node_modules/.bin/gulp normal
[21:13:57] Using gulpfile ~/Desktop/heikki/spawn-task-experiment/gulpfile.js
[21:13:57] Starting 'normal'...
[21:13:57] Starting 'clean'...
[21:13:57] Finished 'clean' after 9.42 ms
[21:13:57] Starting 'parallel'...
[21:13:57] Starting 'normal-task'...
[21:13:57] Starting 'normal-task'...
[21:14:27] Finished 'normal-task' after 30 s
[21:14:27] Finished 'normal-task' after 30 s
[21:14:27] Finished 'parallel' after 30 s
[21:14:27] Finished 'normal' after 30 s
```

Spawned:

```
∴ spawn-task-experiment git:(master) ./node_modules/.bin/gulp spawn
[21:14:34] Using gulpfile ~/Desktop/heikki/spawn-task-experiment/gulpfile.js
[21:14:34] Starting 'spawn'...
[21:14:34] Starting 'clean'...
[21:14:34] Finished 'clean' after 8.95 ms
[21:14:34] Starting 'parallel'...
[21:14:34] Starting 'spawn-task'...
[21:14:34] Starting 'spawn-task'...
[21:14:50] Finished 'spawn-task' after 16 s
[21:14:50] Finished 'spawn-task' after 16 s
[21:14:50] Finished 'parallel' after 16 s
[21:14:50] Finished 'spawn' after 16 s
```

Worker pool (cold run, next ones are slightly faster):

```
∴ spawn-task-experiment git:(master) ./node_modules/.bin/gulp worker-pool
[21:14:58] Using gulpfile ~/Desktop/heikki/spawn-task-experiment/gulpfile.js
[21:14:58] Starting 'worker-pool'...
[21:14:58] Starting 'clean'...
[21:14:58] Finished 'clean' after 8.82 ms
[21:14:58] Starting 'parallel'...
[21:14:58] Starting 'worker-pool-task'...
[21:14:58] Starting 'worker-pool-task'...
[21:15:14] Finished 'worker-pool-task' after 16 s
[21:15:15] Finished 'worker-pool-task' after 16 s
[21:15:15] Finished 'parallel' after 16 s
[21:15:15] Finished 'worker-pool' after 16 s
```
