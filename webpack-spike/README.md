# Dependent-only filesystem watching  

## Usage
in one shell run `webpack --watch`. In another run `node build/bundle.js`. Then try changing either a `/test` file or a `/src` file. You should see incremental re-running of tests.

## TODO
- generalize to be a file watcher, not a test runner
- run both webpack and watcher in a single process
 - programatically launch webpack
 - or, make the watcher a webpack plugin?
