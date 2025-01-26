## SMB Samba Share


### Setup


```
adduser dungeon
```



```
sudo apt install samba
```



```
sudo nano /etc/samba/smb.conf
```


Then, add these lines


```
[earth]
	comment = Dungeon Storage
	path = /mnt/earth
	read only = no
	browsable = yes
```


Make sure the directory of the share exists and is owned by the new user.

To add the user to samba run ``` sudo smbpasswd -a dungeon ``` then enter a new password for SMB use.


### Setup for Guest Use

As above installation, though use conf like this:


```
[earth]
	comment = Dungeon Storage
	path = /mnt/earth
	public = yes
	guest only = yes
	writable = yes
	force create mode = 0666
	force directory mode = 0777
	browseable = yes
```


Run `sudo service smbd restart` after changing the conf file


### Connect From Linux

To login as the user


```
sudo apt install smbclient -y
smbclient //192.168.1.208/earth -U dungeon
```


To login anonymously


## ZFS Zpool


### Install


```
sudo apt install zfsutils-linux -y
sudo modprobe zfs
```