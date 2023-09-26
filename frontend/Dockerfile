FROM node:lts

## Customized Section By Nasri Thamer | thamer.nasri@gmail.com

### Section Tools
RUN apt-get update && apt-get upgrade -y && apt-get install -y vim wget git nano net-tools procps systemd && rm -rf /var/lib/apt/lists/*

RUN git config --global user.email "thamer.nasri@gmail.com" \
    && git config --global user.name "Nasri Thamer"

RUN npm install -g @angular/cli
# Create a non-root user for running the application
RUN mkdir -p /var/www/html

WORKDIR /var/www/html

# Expose the port
## for reactjs
EXPOSE 3000
## for angular
EXPOSE 4200

# Start the application
#CMD ["yarn", "start"]
