#!/bin/bash

sudo apt-get update
sudo apt-get install docker.io -y
sudo systemctl start docker
sudo chmod 666 /var/run/docker.sock
sudo systemctl enable docker
docker pull psoakun/fp-pso:latest
docker run -d -p 3000:3000 psoakun/fp-pso:latest
