# Setup SSH Github Action

This action adds a SSH key and updates the known hosts file for external server access.

## Inputs

### `ssh-private-key`

**Required** Private key required to access the host.

### `ssh-host`

**Required** Hostname or IP to add to the known hosts file.

## Example usage

```
uses: kielabokkie/ssh-key-and-known-hosts-action@v1
with:
  ssh-private-key: ${{ secrets.SSH_PRIVATE_KEY }}
  ssh-host: your-server.com
```
