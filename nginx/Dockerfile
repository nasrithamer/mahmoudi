FROM nginx:stable

RUN apt-get update && apt-get upgrade -y && apt-get install -y  \
    vim wget git nano net-tools procps systemd \
    && rm -rf /var/lib/apt/lists/*

RUN mkdir -p /var/www/html
RUN chown -R www-data:www-data /var/www/html

WORKDIR /var/www/html

CMD ["nginx", "-g", "daemon off;"]