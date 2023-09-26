
# Running this project on local

### To run this project on local

```bash
  docker compose up -d --build
```
```bash
  edit file hosts and add these lines
  127.0.0.1 mahmoudi.local
  127.0.0.1 backend.mahmoudi.local
```

### Visit now [http//mahmoudi.local:4200](http//mahmoudi.local:4200)

### configure backend app and create a user
```bash
  docker exec -it mahmoudi_symfony_container bash
  cd symfony
  composer install
  symfony console app:create-user
```