# Debian SSH Keys
### Create SSH key and copy it to the server

```sh
ssh-keygen -o -a 100 -t ed25519 -f ~/.ssh/P310 -C "dungeonsff to P310"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/P310
ssh-copy-id -i ~/.ssh/P310 192.168.1.210
```

### Add this to 
```sh 
~/.ssh/config 
```
```sh
Host P310
  HostName 192.168.1.210
  User sven
  IdentityFile ~/.ssh/P310
  IdentitiesOnly yes
```
