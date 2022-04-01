# Setup SSH Github Action

This action adds a SSH key and adds a given hostname or IP address to the known hosts file for external server access. It was heavily inspired by [atymic/deployer-php-action](https://github.com/atymic/deployer-php-action).

You can run this action before copying files to an external server using `scp` or `rsync` for example.

## Sponsor me

Did this action spark joy, or you find it useful? Please consider sponsoring me via [GitHub Sponsors](https://github.com/sponsors/kielabokkie). Thanks!

## Inputs

* `ssh-private-key`

**Required** Private key required to access the host.

* `ssh-host`

**Required** Hostname or IP address to add to the known hosts file.

* `ssh-port`

*Optional* Port for key-scanning the server.

* `ssh-socket`

*Optional* The unix file socket that the agent uses for communication with other processes.

## Example usage

Just the required inputs:
```
uses: kielabokkie/ssh-key-and-known-hosts-action@v1
with:
  ssh-private-key: ${{ secrets.SSH_PRIVATE_KEY }}
  ssh-host: your-server.com
```

If your SSH port is different from the default you can change it:
```
uses: kielabokkie/ssh-key-and-known-hosts-action@v1
with:
  ssh-private-key: ${{ secrets.SSH_PRIVATE_KEY }}
  ssh-host: your-server.com
  ssh-port: 2222
```

If you are using this action on concurrent builds the `ssh-socket` should be unique to prevent `address in use` issues:
```
uses: kielabokkie/ssh-key-and-known-hosts-action@v1
with:
  ssh-private-key: ${{ secrets.SSH_PRIVATE_KEY }}
  ssh-host: your-server.com
  ssh-socket: /tmp/ssh_agent_${{ github.sha }}.sock
```
