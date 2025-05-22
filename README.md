# Setup SSH Github Action

This action adds a SSH key and adds a given hostname or IP address to the known hosts file for external server access. It was heavily inspired by [atymic/deployer-php-action](https://github.com/atymic/deployer-php-action).

You can run this action before copying files to an external server using `scp` or `rsync` for example.

## Sponsor me

Did this action spark joy, or you find it useful? Please consider sponsoring me via [GitHub Sponsors](https://github.com/sponsors/kielabokkie). Thanks!

## Inputs

| Input                 | Required | Description
| --------------------- | -------- | ----------------------------------------------------------------------------------
| `ssh-private-key`     | **Yes**  | Private key required to access the host.
| `ssh-host`            | **Yes**  | Hostname or IP address of the server you want to access.
| `ssh-port`            | Optional | Port for used for SSH on the host server (port 22 by default).
| `ssh-keyscan-timeout` | Optional | Timeout for the `ssh-keyscan` command (default is 5 seconds).
| `ssh-socket`          | Optional | The unix file socket that the agent uses for communication with other processes.

## Example usage

Just the required inputs:

```yaml
uses: kielabokkie/ssh-key-and-known-hosts-action@v1
with:
  ssh-private-key: ${{ secrets.SSH_PRIVATE_KEY }}
  ssh-host: your-server.com
```

If your SSH port is different from the default you can change it:

```yaml
uses: kielabokkie/ssh-key-and-known-hosts-action@v1
with:
  ssh-private-key: ${{ secrets.SSH_PRIVATE_KEY }}
  ssh-host: your-server.com
  ssh-port: 2222
```

If you need to increase the timeout for the `ssh-keyscan` command you can do that as well:

```yaml
uses: kielabokkie/ssh-key-and-known-hosts-action@v1
with:
  ssh-private-key: ${{ secrets.SSH_PRIVATE_KEY }}
  ssh-host: your-server.com
  ssh-keyscan-timeout: 10
```

If you are using this action on concurrent builds the `ssh-socket` should be unique to prevent `address in use` issues:

```yaml
uses: kielabokkie/ssh-key-and-known-hosts-action@v1
with:
  ssh-private-key: ${{ secrets.SSH_PRIVATE_KEY }}
  ssh-host: your-server.com
  ssh-socket: /tmp/ssh_agent_${{ github.sha }}.sock
```
