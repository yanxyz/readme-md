const { spawn } = require('child_process')
const config = require('./config')

module.exports = function (opts = {}) {
  const child = spawn('bundle', ['exec', 'jekyll', 'build', '--incremental'], {
    cwd: config.output,
    stdio: 'inherit',
    shell: true,
  })

  if (opts.open) {
    child.on('close', code => {
      if (code === 0) {
        require('./open').open(opts.open)
      }
    })
  }
}
