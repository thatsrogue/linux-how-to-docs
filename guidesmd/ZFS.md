### Create new ZFS pool 


#### Simple - with /dev/sdx


```
sudo zpool create -f tank raidz1 /dev/sdb /dev/sdc /dev/sdd
```



#### Thorough - with /dev/disk/by-id

It’s not super pretty but you can find the ID/Serial number with `ls -l /dev/disk/by-id/` and then use the ID’s as such:


```
sudo zpool create -f dummy raidz1 \
/dev/disk/by-id/wwn-0x5000c5007fa27c96 \
/dev/disk/by-id/wwn-0x5000c500259d4d69 \
/dev/disk/by-id/wwn-0x5000c5004a89f155 \
/dev/disk/by-id/wwn-0x5000cca715c20e10
```


Note you can also find an ata-xxxx Model/Serial Number ID, which is my preferred use.


### Mount


```
sudo zfs set mountpoint=/mnt/raidz tank
```


To be confirmed this command works (cool syntax), change the permissions of mount directory with `sudo chown -R sven:sven /foo_mount`


### Add a Hot Spare after creation


```
sudo zpool add dummy spare ata-HGST_HTS725050A7E630_170514RCF50ACF1LB01N
```



### Change /dev/sdx Naming to use ID/Serial number

Apparently this is safer. Run this to change it after it has been created.


```
sudo zpool export tank
sudo zpool import -d /dev/disk/by-id/ tank
```



### Deleting Zpool

`sudo zpool destroy` takes a long long time.

The pool can be *disconnected* with `sudo zpool export tank`


### Replacing FAULTED or OFFLINE Disks

This method is apparently not preferred as it [may be prone to human error.](https://docs.tritondatacenter.com/private-cloud/troubleshooting/disk-replacement#replace-the-drive-with-a-spare)


```
sudo zpool offline fivebysix ata-ST500LT012-1DG142_S3PFF53T
sudo zpool replace fivebysix 13874504625698518329 /dev/disk/by-id/ata-HGST_HTS725050A7E630_170421RCF50ACF1KJS6N
```


if you restart during resilver - it will start from the beginning. I think there may be a way to pause it…