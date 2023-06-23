# Ważne:

## scrypty

## curl

```sh
curl -v -X POST localhost:3000/register -H 'Content-Type: application/json' -d '{"email":"email@gmail.com","name":"tom","password":"Tom123456", "passwordConfirmation":"Tom123456"}'
```

```sh
curl -v -X POST localhost:3000/login -H 'Content-Type: application/json' -d '{"email":"email@gmail.com","password":"Tom123456"}'
```

```sh
curl -v localhost:3000/home --cookie 'sid=s%3AAIXAiOMy3OLCOGes81fOQc2ARgIJvB7e.pUAO6k5eLLlV3DE%2F8WG2fx3DmyOjbhqe3UW4hfBTvoA'
```

```sh
curl -v -X POST localhost:3000/logout --cookie 'sid=s%3AAIXAiOMy3OLCOGes81fOQc2ARgIJvB7e.pUAO6k5eLLlV3DE%2F8WG2fx3DmyOjbhqe3UW4hfBTvoA'
```

## docker -it

```sh
docker exec -it node-auth-db-1 mongo -u admin -p secret auth
```

```sh
docker exec -it node-auth-cache-1 redis-cli -a secret
```
