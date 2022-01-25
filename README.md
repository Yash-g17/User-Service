# User-Service
<br/>

#### API documentation : https://bit.ly/user-service-g17

This is a Node Express Mongo application which is made along with User-Interaction-Service and Content-Service.

### To start the service 

Locate the service in the terminal.

If not already created , create a bridge network to connect docker containers of all the services .

`docker network create bridge-network`

After the bridge network has been created , use the command below to run the service , make sure your port 3001 is free

`docker-compose up --build -d`

This service contains two containers - 

**1) user :** Node Express Backend CRUD operations on Users. A list of all APIs can be found here https://bit.ly/user-service-g17 .Service makes use of port 3002 which has to be free.


**2) mongouser :** A mongo database to store users. Schema of the database can be found here https://github.com/Yash-g17/User-Service/blob/main/models/user.model.js . Service makes use of port 27017 which is an internal port.


### To stop the service gracefully

Simply go to the terminal where you started the service and run

`docker-compose down`
<br/>
<br/>
<br/>
<br/>
<br/>
