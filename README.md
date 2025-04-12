# LOOPII – Cloud-Native Habit Tracker (SIT737 - Task 6.2C)

This repository contains the updated version of the LOOPII backend habit-tracking application, enhanced with a professional frontend UI and deployed on a Kubernetes cluster. The application is fully containerized using Docker and exposed via a Kubernetes NodePort service. This project demonstrates practical skills in DevOps, container orchestration, and cloud-native software deployment as part of Deakin's SIT737 Software Deployment & Operation unit.

## Features

--> Node.js backend application using Express framework (v5.1.0)

--> HTML-styled homepage with smart layout and navigation

--> Dockerized and versioned (v2) with consistent build structure

--> Kubernetes Deployment with 3 replicas for load balancing

--> Exposed to the internet via NodePort Service on port 30050

## Folder Structure

sit737-6.2c-loopii/

app.js                  # Node.js app with styled homepage and status endpoint

Dockerfile              # Builds the container using node:18 image

package.json            # Declares Express dependency

package-lock.json       # Locks dependencies

deployment.yaml         # Kubernetes deployment (3 pods with correct labels)

service.yaml            # Kubernetes NodePort service (3040 -> 30050)

screenshots/            # Visual evidence of setup and deployment
  
  1.png               # Docker image build and push
  
  2.png               # kubectl apply for deployment/service
  
  3.png               # pod and service verification
  
  4.png               # Homepage UI shown in browser
  
  5.png               # /status API result in browser

## How to Build & Deploy

### 1. Build Docker Image

docker build -t username/loopii-backend-loopii:v2 .

docker push username/loopii-backend-loopii:v2

### 2. Deploy to Kubernetes

kubectl apply -f deployment.yaml

kubectl apply -f service.yaml

### 3. Forward Port to Access in Browser

kubectl port-forward service/loopii-service-2 30050:80

## Access Points

Test in browser:

http://localhost:30050/

http://localhost:30050/status

## What This Demonstrates

--> Real-world CI/CD pipeline structure with manual Docker/K8s process

--> App versioning and deployment strategy using container registry

--> Kubernetes resource management with `Deployment` and `Service` objects

--> Functional port-forwarding to expose internal service externally

--> Frontend/backend integration in a single Node.js service

## Author

**Preeth Ramadoss**  

Student ID: 223655097

Task: SIT737(Task 6.2C)



