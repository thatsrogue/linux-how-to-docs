# Sessions


## Installation


```
sudo apt install screen -y
```



## Start a New Session


```
screen -S session_name
```



## Detach From Screen Session

Ctrl + a, Ctrl + d


## Reattach to a Screen


```
screen -r
```



## Reattach to Screen When There are Multiple


```
screen -ls
```


Output:


```
There are screens on:
    	530181.testscreen   	(13/09/22 12:52:49) 	(Detached)
    	530092.makeitgpg    	(13/09/22 12:36:02) 	(Detached)
2 Sockets in /run/screen/S-sven.
```


To attach to testscreen, run


```
screen -r 530181
```


