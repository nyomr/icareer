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

resource "aws_instance" "my_instance" {
  ami           = ami-01b799c439fd5516a
  instance_type = t2.micro
  key_name      = key-ec2
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

    connection {
      type        = "ssh"
      user        = "ubuntu"
      private_key = file("~/.ssh/key-ec2.pem")
      host        = aws_instance.my_instance.public_ip
    }
  }
}

output "instance_ip" {
  value = aws_instance.my_instance.public_ip
}
