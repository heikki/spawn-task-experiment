# Spawn task experiment

> Tests how fast it is to run gulp tasks in child processes

Two normal tasks run parallel:

```
∴ spawn-task-experiment git:(master) ./node_modules/.bin/gulp normal
[22:09:16] Using gulpfile ~/Desktop/spawn-task-experiment/gulpfile.js
[22:09:16] Starting 'normal'...
[22:09:16] Starting 'clean'...
[22:09:16] Finished 'clean' after 9.08 ms
[22:09:16] Starting 'parallel'...
[22:09:16] Starting 'normal-task'...
[22:09:16] Starting 'normal-task'...
[22:09:45] Finished 'normal-task' after 29 s
[22:09:45] Finished 'normal-task' after 29 s
[22:09:45] Finished 'parallel' after 29 s
[22:09:45] Finished 'normal' after 29 s
```

Two spawned tasks run parallel:

```
∴ spawn-task-experiment git:(master) ./node_modules/.bin/gulp spawn
[22:09:51] Using gulpfile ~/Desktop/spawn-task-experiment/gulpfile.js
[22:09:51] Starting 'spawn'...
[22:09:51] Starting 'clean'...
[22:09:51] Finished 'clean' after 9.29 ms
[22:09:51] Starting 'parallel'...
[22:09:51] Starting 'spawn-task'...
[22:09:51] Starting 'spawn-task'...
[22:10:07] Finished 'spawn-task' after 16 s
[22:10:07] Finished 'spawn-task' after 16 s
[22:10:07] Finished 'parallel' after 16 s
[22:10:07] Finished 'spawn' after 16 s
```
