resource "aws_vpc" "main" {
    cidr_block = 10.0.0.0/16
    instance_tenancy = "default"
    enable_dns_support = true
    enable_dns_hostnames = true
    availability_zones = ["us-east-1a", "us-east-1b", "us-east-1c"]
}

resource "aws_subnet" "zonea" {
    vpc_id = aws_vpc.main.id 
    cidr_block = 10.0.0.0/16
    availability_zone = "us-east-1a"
    tags = {
        Name = "public 1"
    }

}
resource "aws_subnet" "zoneb" {
    vpc_id = aws_vpc.main.id 
    availability_zone = "us-east-1b"
    tags = {
        Name = "public 2"
    }
}


