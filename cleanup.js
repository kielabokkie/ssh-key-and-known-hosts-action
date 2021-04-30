const execa = require('execa')

async function run() {
  console.log('Stopping ssh-agent')

  await execa('export SSH_AGENT_PID=$(cat SSH_AGENT_PID_FILE)')
  await execa('ssh-agent', ['-k'])
}

run()
