# Setup SSH Github Action

This action adds a SSH key and adds a given hostname or IP address to the known hosts file for external server access. It was heavily inspired by [atymic/deployer-php-action](https://github.com/atymic/deployer-php-action).

You can run this action before copying files to an external server using `scp` or `rsync` for example.

## Inputs

* `ssh-private-key`

**Required** Private key required to access the host.

* `ssh-host`

**Required** Hostname or IP address to add to the known hosts file.

## Example usage

```
uses: kielabokkie/ssh-key-and-known-hosts-action@v1
with:
  ssh-private-key: ${{ secrets.SSH_PRIVATE_KEY }}
  ssh-host: your-server.com
```

