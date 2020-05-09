# dockeer_project_iiec

# Downloading the docker images
  mysql:5.7
  node:10-alpine


# 1 Runing the Project
    Run-: npm install
    Run-: sudo docker build -t asingh2985/node_env_1:latest .
    This will create a docker image containg node app
    
# 2 Running the docker-compose file
    cd compose
    sudo docker-compose up
      This will launch the mysql and node server

# 3 Creating a table in mysql client
    Find the IPv4 using-: docker inspect <id_name_mysql_container> | grep IP
    Launching the mysql client-: mysql -h IPv4 -u ashish -p123456
    RUN-: use trial;
    RUN-: CREATE TABLE Notes (id int AUTO_INCREMENT, newNote varchar(255), PRIMARY KEY (id));
    
# NOTE-:
    By default IP given to node server for connecting to the mysql is 172.18.0.2, if mysql is running on other it has to be changed by going into app.js file on line number-: 10
    Old docker compose file has to be stopped-: sudo docker-compose stop
    Image has to be created again and docker-compose up has to be executed again
    

    
    
    
    
