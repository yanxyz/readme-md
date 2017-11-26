const opn = require('opn')
const parseArgs = require('./utils/parse-args')
const config = require('./config')

module.exports = function () {
  const argv = parseArgs(process.argv.slice(3))

  const name = argv._.length ? argv._[0].replace(/^\.[/\\]/, '') : null
  open(name)
}

function open(name) {
  if (name) {
    opn(`${config.host}/${name}/`)
  } else {
    opn(config.host)
  }
}

module.exports.open = open
