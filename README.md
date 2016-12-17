# Dependent-only filesystem watching  

## Usage
`npm start`, then try changing either a `/test` file or a `/src` file. You should see incremental re-running of tests.

## TODO
- actually run tests!
- generalize to be a file watcher, not a test runner
- switch to using signals to trigger hot reload
- move webpack config into depwatch, build in a temp dir

