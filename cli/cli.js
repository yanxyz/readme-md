#!/usr/bin/env node

const arg = process.argv[2]
if (!arg || arg.startsWith('-')) {
  showHelp()
}

main(arg)

function main(cmd) {
  const cmds = [
    'build',
    'copy',
    'get',
    'open',
  ]

  const arr = cmds.filter(item => item.startsWith(cmd))
  if (arr.length === 1) {
    require('./' + arr[0])()
    return
  }

  console.log('Unknown argument')
}

function showHelp() {
  console.log(`Usage: remd <command>

Commands:

build
Build site

copy paths...
Copy readme in the current directory to site

get <name>
Get readme by npm

open <name>
Open readme in browser

`)
  process.exit()
}
