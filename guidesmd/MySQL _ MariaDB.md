# MySQL / MariaDB


## Workbench on debian Locale error


```
sudo apt install locales
sudo dpkg-reconfigure locales
```


I ticked en_US aswell as the already selected en_AU and then on 2nd screen picked 1st option for C something


## Enable networking for MariaDB

Edit `/etc/mysql/mariadb.conf.d/50-server.cnf` and comment this line out as such:


```
#bind-address        	= 127.0.0.1
```


In the same file add these two lines:


```
skip-networking=0
skip-bind-address
```



### Create user for Remote Access

Note % allows connection from any host.


```
CREATE USER 'sensorlogger'@'%' IDENTIFIED BY '86nonsense-sensor74';
GRANT INSERT ON sensorlog.* TO 'sensorlogger'@'%';
GRANT SELECT ON sensorlog.* TO 'sensorlogger'@'%';
FLUSH PRIVILEGES;
```



# NodeJS / npm / PM2


## Install


```
sudo apt install nodejs npm -y
```



## Initialise Directory


```
npm init
```


And follow prompts.


## Install Modules

In the initialised directory


```
npm install mysql socket.io express
```



```
npm install nodemon --save-dev
```



#