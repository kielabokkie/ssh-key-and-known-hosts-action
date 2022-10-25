const execa = require('execa')

async function run() {
  console.log('Stopping ssh-agent')

  await execa('kill -9 $(ps -e | grep -m1 "[s]sh-agent" | awk \'{print $1}\')', { shell: true });
}

run()
