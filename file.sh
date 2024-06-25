#!/bin/bash

sudo apt-get update
sudo apt-get install docker.io -y
sudo systemctl start docker
sudo chmod 666 /var/run/docker.sock
sudo systemctl enable docker