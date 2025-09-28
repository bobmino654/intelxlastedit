# AWS EC2 Setup for IntelX360 Static Website

This guide outlines the steps to set up an Ubuntu EC2 instance on AWS to host the static Next.js export.

## 1. Launch EC2 Instance

1.  **Go to the EC2 Dashboard** in your AWS Console.
2.  Click **Launch Instance**.
3.  **Name:** `IntelX360-WebApp-Server`.
4.  **Application and OS Images (AMI):** Choose **Ubuntu**, and select the latest LTS version (e.g., Ubuntu Server 22.04 LTS).
5.  **Instance Type:** `t2.micro` is sufficient for a low-traffic static site and is Free Tier eligible.
6.  **Key Pair:** Create a new key pair or use an existing one. Download the `.pem` file and keep it safe. You'll need it to SSH into your instance.
7.  **Network Settings:**
    *   Click **Edit**.
    *   Create a new security group named `IntelX360-WebApp-SG`.
    *   Add the following inbound rules:
        *   **Type:** `SSH`, **Source:** `My IP` (for secure access).
        *   **Type:** `HTTP`, **Source:** `Anywhere` (0.0.0.0/0).
        *   **Type:** `HTTPS`, **Source:** `Anywhere` (0.0.0.0/0).
8.  **Configure Storage:** 8 GB is the default and is enough for this project.
9.  Click **Launch Instance**.

## 2. Connect to Your Instance

1.  Go to your EC2 Instances list, select your instance, and click **Connect**.
2.  Follow the instructions under the **SSH client** tab. Example command:

```bash
ssh -i "your-key.pem" ubuntu@your-public-dns.amazonaws.com
```

## 3. Install and Configure Nginx

Once connected to your instance via SSH, update the package list and install Nginx.

```bash
# Update package lists
sudo apt update

# Install Nginx
sudo apt install nginx -y
```

### Verify Nginx

Check that Nginx is running:

```bash
sudo systemctl status nginx
```

You should see an `active (running)` status. You can also navigate to your instance's public IP address in a browser, and you should see the default Nginx welcome page.

## 4. Set up HTTPS with Let's Encrypt (Certbot)

To enable HTTPS, you need a domain name pointing to your EC2 instance's public IP address.

1.  **Install Certbot:**

```bash
sudo apt install certbot python3-certbot-nginx -y
```

2.  **Run Certbot:**

Replace `yourdomain.com` with your actual domain name.

```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

Follow the prompts. Certbot will automatically obtain a certificate and configure Nginx to use it. It will also set up automatic renewal.

## 5. Firewall Configuration

Although the security group handles firewall rules at the AWS level, it's good practice to configure the local firewall (UFW).

```bash
# Allow SSH, HTTP, and HTTPS
sudo ufw allow 'Nginx Full'
sudo ufw allow 'OpenSSH'

# Enable UFW
sudo ufw enable
```

Your server is now ready to host the website files.
