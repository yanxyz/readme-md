const fs = require('fs-extra')
const path = require('path')
const { execSync } = require('child_process')
const parseArgs = require('./utils/parse-args')
const config = require('./config')

module.exports = function () {
  const argv = parseArgs(process.argv.slice(3), {
    alias: {
      'build': 'b',
      'open': 'o',
    }
  })

  if (!argv._.length) {
    console.log('Usage: remd get <name>')
    return
  }

  const name = argv._[0]
  const out = execSync(`npm view ${name} readme`)
  fs.outputFileSync(path.join(config.output, name, 'readme.md'), out.toString())

  if (argv.open || argv.build) {
    require('./build')({ open: argv.open && name })
  }
}
