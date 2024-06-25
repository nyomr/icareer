terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
  access_key = "AKIA3FLD5TGMVDZBTLQZ"
  secret_key = "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"
}

resource "tls_private_key" "rsa_4096" {
  algorithm = "RSA"
  rsa_bits = 4096
}

variable "key_name" {
  description = "terraform-key"
  default     = "terraform-key"  
}

resource "aws_key_pair" "service_key_pair" {
  public_key = tls_private_key.rsa_4096.public_key_openssh
}

resource "local_file" "private_key" {
  content = tls_private_key.rsa_4096.private_key_pem
  filename = var.key_name
}

resource "aws_instance" "my_instance" {
  ami           = "ami-01b799c439fd5516a"
  instance_type = "t2.micro"
  key_name      = "terraform.key"
  tags = {
    Name = "i-career"
  }

  provisioner "remote-exec" {
    inline = [
      "sudo apt update",
      "sudo apt upgrade -y",
      "docker --version",
      "docker ps"
    ]


output "instance_ip" {
  value = aws_instance.my_instance.public_ip
}
