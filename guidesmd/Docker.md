# Docker

## Setup docker on Manjaro
This will also allow you to run docker without sudo
```
sudo pacman -S docker
sudo groupadd docker
sudo gpasswd -a $USER docker
newgrp docker
sudo systemctl start docker.service 
sudo systemctl enable docker.service
```