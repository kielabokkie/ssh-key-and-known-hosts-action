const execa = require('execa')

async function run() {
  console.log('Stopping ssh-agent')

  await execa('ssh-agent', ['-k'])
}

run()
