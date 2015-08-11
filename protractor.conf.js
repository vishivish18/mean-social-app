exports.config = {
framework : 'mocha',
specs : [
 'tests/e2e/**/*.spec.js'
],
mochaOpts : {
 enableTimeouts : false
}
}
