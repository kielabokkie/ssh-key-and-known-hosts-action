const core = require('@actions/core')
const execa = require('execa')
const promise = require('bluebird')
const fs = promise.promisifyAll(require('fs'))


async function run() {
  try {
    const privateKey = core.getInput('ssh-private-key')
    const host = core.getInput('ssh-host')

    // Create the required directory
    const sshDir = process.env['HOME'] + '/.ssh'
    fs.mkdirAsync(sshDir, {recursive: true})

    console.log('Starting ssh-agent')

    // Start the ssh agent
    const authSock = '/tmp/ssh-auth.sock'
    await execa('ssh-agent', ['-a', authSock])
    core.exportVariable('SSH_AUTH_SOCK', authSock)

    console.log('Adding private key')

    // Add the private key
    const key = privateKey.replace('/\r/g', '').trim() + '\n'
    await execa('ssh-add', ['-'], {input: key})

    console.log('Adding host to known_hosts')

    // Add the host to the known_hosts file
    const {stdout} = await execa('ssh-keyscan', [host])
    await fs.appendFileAsync(sshDir + '/known_hosts', stdout)
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
