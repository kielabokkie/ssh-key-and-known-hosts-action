const execa = require('execa')

async function run() {
  console.log('Stopping ssh-agent')

  await execa('kill -9 $(pidof ssh-agent)', { shell: true });
}

run()
