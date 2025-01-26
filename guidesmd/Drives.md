## Drives

### Mounting
Create directory, add permissions
Then run, changing partition and mount point
```sh
sudo mount -t auto /dev/sdb1 /mnt/earth
```
### Un-Mounting
```sh
umount /dev/sdb1
```
### Auto-Mounting
Create directory to mount to
Add permissions if required
Run 
```sh
sudo blkid
```
to find the UUID and type
Edit /etc/fstab 
Add entry like this, changing UUID and mount point
```sh
UUID=faba779f-6c49-46ea-85bf-c40371c80012  /mnt/earth  ext4
```
defaults 0 2

Run 
```sh
sudo mount a
```
Run 
```sh
sudo systemctl daemon-reload
```