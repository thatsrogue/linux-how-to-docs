## Creating NTFS Partition for Windows from scratch


### Context: The drive has been shredded as follows


```
sudo shred -zvfn1 /dev/sdb
```



### Use fdisk to create partition, table, and partition type


```
sudo fdisk /dev/sdb
```



#### Create GPT table


```
g
```



#### New partition


```
n
```



#### Primary


```
Enter
```



#### First sector


```
Enter
```



#### Last sector


```
Enter
```



#### Partition label menu


```
t
```



#### List available - this is dependent on table type


```
L
```



#### Find the number for Microsoft basic data. May be different


```
11
```



#### Write changes


```
w
```



### Format partition using mkfs


```
sudo mkfs.ntfs -Q /dev/sdb1
```


Q option for quick - do not zero all bytes.