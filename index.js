import { exportVariable, getInput, setFailed } from "@actions/core";
import { execa } from "execa";
import { appendFile, chmod, mkdir } from "node:fs/promises";

async function run() {
  try {
    const privateKey = getInput("ssh-private-key", { required: true });
    const host = getInput("ssh-host", { required: true });
    const authSock = getInput("ssh-socket");
    const port = getInput("ssh-port");
    const sshKeyscanTimeout = getInput("ssh-keyscan-timeout");

    // Create the required directory
    const sshDir = process.env["HOME"] + "/.ssh";
    await mkdir(sshDir, { recursive: true });

    console.log("Starting ssh-agent");

    // Start the ssh agent
    await execa("ssh-agent", ["-a", authSock]);

    exportVariable("SSH_AUTH_SOCK", authSock);

    console.log("Adding private key");

    // Add the private key
    const key = privateKey.replace(/\r/g, "").trim() + "\n";
    await execa("ssh-add", ["-"], { input: key });

    console.log("Adding host to known_hosts");

    // Add the host to the known_hosts file
    const keyScanArgs = ["-p", port, host];
    if (sshKeyscanTimeout) {
      keyScanArgs.unshift("-T", sshKeyscanTimeout);
    }
    const { stdout } = await execa("ssh-keyscan", keyScanArgs);
    const knownHostsFile = sshDir + "/known_hosts";

    await appendFile(knownHostsFile, stdout);
    await chmod(knownHostsFile, "644");
  } catch (error) {
    setFailed(error.message);
  }
}

await run();
