# Dependent-only filesystem watching  

## Example
`npm run example`, then try changing either an `/example/test` file or an `/example/src` file. You should see incremental re-running of tests.

## TODO
- actually run real tests, not fake tests!
- switch to using signals to trigger hot reload
- move webpack config into depwatch, build in a temp dir
- support custom webpack config with smart defaults
