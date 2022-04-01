const core = require('@actions/core')
const execa = require('execa')
const promise = require('bluebird')
const fs = promise.promisifyAll(require('fs'))

async function run() {
  try {
    const privateKey = core.getInput('ssh-private-key', { required: true })
    const host       = core.getInput('ssh-host', { required: true })
    const authSock   = core.getInput('ssh-socket')
    const port       = core.getInput('ssh-port')

    // Create the required directory
    const sshDir = process.env['HOME'] + '/.ssh'
    await fs.mkdirAsync(sshDir, {recursive: true})

    console.log('Starting ssh-agent')

    // Start the ssh agent
    await execa('ssh-agent', ['-a', authSock])

    core.exportVariable('SSH_AUTH_SOCK', authSock)

    console.log('Adding private key')

    // Add the private key
    const key = privateKey.replace('/\r/g', '').trim() + '\n'
    await execa('ssh-add', ['-'], {input: key})

    console.log('Adding host to known_hosts')

    // Add the host to the known_hosts file
    const {stdout}       = await execa('ssh-keyscan', ['-p', port, host])
    const knownHostsFile = sshDir + '/known_hosts'

    await fs.appendFileAsync(knownHostsFile, stdout)
    await fs.chmodAsync(knownHostsFile, '644')
  }
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
