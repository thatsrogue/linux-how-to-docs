# Notes

After upgrading to 6 disks, this is where we’re at. With Zpool create I wish to try the ata designations.

/dev/sdb wwn-0x5000c5007fa27c96 ata-ST500LT012-1DG142_S3PFF53T

/dev/sdc wwn-0x5000c500259d4d69 ata-ST9500420AS_5VJ6Z0Y1

/dev/sdd wwn-0x5000c5004a89f155 ata-ST9500423AS_6WR0R811

/dev/sde wwn-0x5000cca715c20e10 ata-APPLE_HDD_HTS547550A9E384_J2210056G4J48B

/dev/sdf wwn-0x5000cca8bcd66f7b ata-HGST_HTS725050A7E630_170514RCF50ACF1LB01N

/dev/sdk wwn-0x5000c5003839188d ata-ST9500420AS_5VJBLGRL

Such that command is:


```
sudo zpool create -f fivebysix raidz1 \
/dev/disk/by-id/ata-ST500LT012-1DG142_S3PFF53T \
/dev/disk/by-id/ata-ST9500420AS_5VJ6Z0Y1 \
/dev/disk/by-id/ata-ST9500423AS_6WR0R811 \
/dev/disk/by-id/ata-APPLE_HDD_HTS547550A9E384_J2210056G4J48B \
/dev/disk/by-id/ata-HGST_HTS725050A7E630_170514RCF50ACF1LB01N \
/dev/disk/by-id/ata-ST9500420AS_5VJBLGRL
```




1. Check ONSITE archive has copied across to ext hdd.
2. Create command to create new zpool with FIVE disk
3. Run it
4. Copy archive to the new zpool
5. Extract the archive on the zpool (x2 including decryption)

P310 Thinkstation in corner of living room

ONE /dev/sdh usb-WD_My_Book_1140_5743415A4137343331303639

TWO /dev/sdi usb-WD_My_Book_1140_5743415A4143303038353431

sudo cryptsetup open /dev/sdi wd1 && sudo mount -t ext4 /dev/mapper/wd1 /mnt/wd1-crypt/ && sudo cryptsetup open /dev/sdf wd2 && sudo mount -t ext4 /dev/mapper/wd2 /mnt/wd2-crypt/

 

Script to setup and mount a encrypted disk

sudo cryptsetup luksFormat /dev/sdi && \

sudo cryptsetup open /dev/sdi wd2 && \

sudo mkfs.ext4 /dev/mapper/wd2 && \

sudo mount -t ext4 /dev/mapper/wd2 /mnt/wd2-crypt/

Extract gpg file, emphasising to prompt for passphrase

gpg --no-symkey-cache --output /mnt/raidz/xfer/wd1/ONSITE.tar.gz --decrypt ONSITE.tar.gz.gpg

Dungeon 10z2 + 1 Spare

sudo zpool create -f ten raidz2 \

/dev/disk/by-id/ata-WDC_WD5000AAKX-08U6AA0_WD-WMC2E8423318 \

/dev/disk/by-id/ata-WDC_WD5000AAKX-75U6AA0_WD-WMC2E0F7795J \

/dev/disk/by-id/ata-ST500DM002-1BD142_Z6EEZLZ8 \

/dev/disk/by-id/ata-ST500DM002-1BD142_Z6EREDX8 \

/dev/disk/by-id/ata-ST500DM002-1BD142_Z6EREBQ5 \

/dev/disk/by-id/ata-ST500DM002-1BD142_Z6EREBG5 \

/dev/disk/by-id/ata-ST500DM002-1BD142_W3T4AQK8 \

/dev/disk/by-id/ata-ST500DM002-1BD142_Z6EREBA2 \

/dev/disk/by-id/ata-ST500DM002-1BD142_W3T4AQR0 \

/dev/disk/by-id/ata-ST500DM002-1BD142_Z6EREDD3 && \

sudo zfs set mountpoint=/mnt/raidz ten && \

sudo chown -R sven:sven /mnt/raidz && \

sudo zpool add ten spare ata-ST500DM002-1BD142_Z6ERE9M5

 

Manly X370F

sda	ata-TOSHIBA_MQ01ACF050_17NQTPDIT

sdb	ata-WDC_WD5000BPKT-75PK4T0_WD-WX41A82Y0945

sudo apt update && sudo apt upgrade -y && sudo apt install zfsutils-linux -y && \

sudo modprobe zfs && \

sudo mkdir /mnt/two-z1 && \

sudo zpool create -f two raidz1 \

/dev/disk/by-id/ata-TOSHIBA_MQ01ACF050_17NQTPDIT \

/dev/disk/by-id/ata-WDC_WD5000BPKT-75PK4T0_WD-WX41A82Y0945 && \

sudo zfs set mountpoint=/mnt/two-z1 two && \

sudo chown -R sven:sven /mnt/two-z1

sudo mkdir /mnt/raidz && \

sudo zpool create -f four raidz1 \

/dev/disk/by-id/ata-SAMSUNG_HD103SI_S210JDWSB05651 \

/dev/disk/by-id/ata-ST1000DM003-1SB102_Z9AAM2W5 \

/dev/disk/by-id/ata-ST31000524AS_5VP7QZAG \

/dev/disk/by-id/ata-WDC_WD10EZEX-08WN4A0_WD-WCC6Y7UTUT8P && \

sudo zfs set mountpoint=/mnt/raidz four && \

sudo chown -R sven:sven /mnt/raidz

Create archive

tar -cvzf folder.tar.gz folder

Extract archive

tar -xvf crap.tar.gz -C ~/

Decompress xz, keep original, force, verbose

xz -vdkf ~/crap.tar.xz

Create Python virtualenv

This no longer seems to work. Need to use venv instead of virtualenv


```
sudo apt install python3-pip -y &&
mkdir ~/scripts &&
python3 -m pip install virtualenv &&
python3 -m virtualenv ~/scripts/sqlcon &&
source ~/scripts/sqlcon/bin/activate &&
python -m pip install mysql-connector-python
```



