# SSH

SSH or Secure Shell is a protocol for computers(machines) to communicate each other securely over the internet. It allows to share files, control and modify remote computers.

To use SSH, access it through shell in the terminal.

__Real World Example:__
Everytime you clone one of your repo you're asked for your password. If you use a SSH key you won't ever need to enter your password ever again. :)

## Generate SSH Key in general

__In your terminal:__
```
ssh-keygen -t rsa
 > Enter file in which to save the key (to use default: ENTER)
 > Enter passphrase - recommended (to use default - no passphrase: ENTER)
```
This command will create a private(file with no suffix) and public(file ends with `.pub`) key. Never share your private key.

To copy your public key
```
pbcopy > ~/.ssh/file_name.pub
```









