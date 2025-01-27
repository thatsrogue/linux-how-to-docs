# SSH Access for GitHub


## Generate SSH key


```sh
ssh-keygen -o -a 100 -t ed25519 -f ~/.ssh/github -C "github key"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/github
```


## Add the public key to Github

Login to Github.com, 
go to Settings, SSH and GPG keys, 
click 'New SSH key', paste the contents from the public key github.pub
which looks like:

```
ssh-ed25519 XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX github key
```

## Test the key is working
