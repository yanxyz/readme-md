const minimist = require('minimist')

module.exports = function (argv, opts) {
  const args = minimist(argv, opts)
  return args
}
