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
