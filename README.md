# docker_project_iiec
  Creating a notepad application
  Nodejs as backend
  mysql as database
  ejs as template engine
  This app provides a user friendly UI, where user can create notes and manage it

# Downloading the docker images
  mysql:5.7
  node:10-alpine


# 1 Runing the Project
    cd into the Repo
    Run-: npm install
    Run-: sudo docker build -t asingh2985/node_env_1:latest .
    This will create a docker image containg node app
    
# 2 Running the docker-compose file
    cd compose/
    sudo docker-compose up
      This will launch the mysql and node server

# 4 Accessing the notepad
    http://0.0.0.0:8080

# 4 Accessing mysql client
    Find the IPv4 using-: docker inspect mydb | grep IP
    Launching the mysql client-: mysql -h IPv4 -u ashish -p123456
    
# NOTE-:
    

    
    
    
    
