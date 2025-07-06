import { execa } from "execa";

async function run() {
  console.log("Stopping ssh-agent");

  await execa(
    "kill -9 $(ps -e | grep -m1 \"[s]sh-agent\" | awk '{print $1}')",
    { shell: true }
  );
}

await run();
