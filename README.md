# Simple Notes App 
This is a simple notes app built with React and Django.

## Requirements
1. Python 3.9
2. Node.js
3. React

## Setup Jenkins on AWS EC2

    Launch an EC2 Instance:
        Choose an Amazon Machine Image (AMI) with Ubuntu.
        Select an instance type (e.g., t2.micro for testing).
        Configure security group to allow HTTP, HTTPS,along with port 8080 and SSH access

    

## Install Jenkins on the EC2 Instance:
```
sudo apt update
sudo apt install openjdk-11-jdk -y
wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | sudo apt-key add -
sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
sudo apt update
sudo apt install jenkins -y
sudo systemctl start jenkins
sudo systemctl enable jenkins
```

## Installation
1. Clone the repository
```
git clone (https://github.com/ishanpathak98/cicd-pipeline-declarative.git)
```

2. Build the app
```
docker build -t notes-app .
```

3. Run the app
```
docker run -d -p 8000:8000 notes-app:latest
```

## Nginx

Install Nginx reverse proxy to make this application available

`sudo apt-get update`
`sudo apt install nginx` 

Access Jenkins:

    Open a web browser and navigate to http://your_ec2_instance_ip_or_domain:8080
    Follow the setup wizard to complete the Jenkins installation.

Install Required Plugins:

    Install Docker Pipeline plugin from Jenkins plugin manager.

Configure Docker in Jenkins:

    Go to Jenkins > Manage Jenkins > Configure System
    Under "Docker", configure Docker settings and provide Docker Hub credentials.

Create a Jenkins Pipeline Job:

    In Jenkins, create a new pipeline job.
    Use the Jenkinsfile provided above in the pipeline script.
