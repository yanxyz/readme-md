const fs = require('fs-extra')
const path = require('path')
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
    console.log('Usage: remd copy paths...')
    return
  }

  const name = path.basename(process.cwd())
  copy(argv._, name).then(() => {
    if (argv.open || argv.build) {
      require('./build')({ open: argv.open && name })
    }
  })
}

function copy(paths, name) {
  const dir = path.join(config.output, name)

  return Promise.all(paths.map(item => fs.copy(item, path.join(dir, item))))
}
