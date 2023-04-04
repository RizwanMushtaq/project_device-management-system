## Device Management App

### Run the development setup using Docker Compose:
docker-compose -f docker-compose.dev.yml up -d

### To view the logs for the running containers, you can use the following command:
docker-compose -f docker-compose.dev.yml logs -f

### To stop and remove the containers, run the following command:
docker-compose -f docker-compose.dev.yml down

### Check the logs of the PostgreSQL container:
docker-compose -f docker-compose.dev.yml logs db

