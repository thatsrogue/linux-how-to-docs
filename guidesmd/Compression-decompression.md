# Compression and decompression

## Create archive
```
tar -cvzf folder.tar.gz folder
```
## Extract archive
```
tar -xvf crap.tar.gz -C ~/
```
## Decompress xz, keep original, force, verbose
```
xz -vdkf ~/crap.tar.xz
```