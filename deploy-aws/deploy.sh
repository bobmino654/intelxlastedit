#!/bin/bash

# A simple script to build the Next.js static export and deploy it to the EC2 server.

# --- Configuration ---
# Your EC2 instance's public DNS or IP address
EC2_HOST="ubuntu@your-public-dns.amazonaws.com"

# The path to your SSH private key (.pem file)
SSH_KEY="~/path/to/your-key.pem"

# The directory on the server where Nginx serves files
REMOTE_DIR="/var/www/html"

# --- Script ---
echo "Starting deployment..."

# 1. Build the static site
echo "Building Next.js static export..."
npm run build

# Check if the build was successful
if [ $? -ne 0 ]; then
    echo "Build failed. Aborting deployment."
    exit 1
fi
echo "Build successful."

# 2. Deploy files to EC2 using rsync
# rsync is efficient and only transfers changed files.
echo "Syncing files to EC2 instance..."
rsync -avz -e "ssh -i $SSH_KEY" --delete ./out/ $EC2_HOST:$REMOTE_DIR

# Check if rsync was successful
if [ $? -ne 0 ]; then
    echo "Rsync failed. Aborting deployment."
    exit 1
fi
echo "File sync successful."

# 3. (Optional) Restart Nginx on the server
# This is usually not necessary for static file changes, but can be useful.
echo "Restarting Nginx on the server..."
ssh -i $SSH_KEY $EC2_HOST "sudo systemctl restart nginx"

if [ $? -ne 0 ]; then
    echo "Nginx restart failed."
    exit 1
fi
echo "Nginx restarted successfully."

echo "---"
echo "Deployment complete! ✅"
echo "---"

exit 0
