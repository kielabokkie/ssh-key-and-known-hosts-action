import { execa } from "execa";
import { info } from "@actions/core";

async function run() {
  info("Stopping ssh-agent");

  await execa(
    "kill -9 $(ps -e | grep -m1 \"[s]sh-agent\" | awk '{print $1}')",
    { shell: true }
  );
}

await run();
