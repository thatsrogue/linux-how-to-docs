## Encrypted Drive


### Install


```
sudo apt install cryptsetup -y
```



### Encrypt a Disk


```
sudo cryptsetup luksFormat /dev/sdg
```



### Open the Volume


```
sudo cryptsetup open /dev/sdg blue-crypt
```


Enter passphrase.


### Create Filesystem


```
sudo mkfs.ext4 /dev/mapper/blue-crypt
```



### Mount It


```
sudo mount -t ext4 /dev/mapper/blue-crypt /mnt/blue-crypt/
```



### Grant Access to the disk - Often required after format


```
sudo chown -R chris:chris/media/chris/71e77ddf-944f-4828-93a8-169b0be2dc48
```