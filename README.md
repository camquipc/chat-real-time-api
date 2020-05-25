# chat-real-time
chat realtime in react redux nodejs...

## Instalación via git

1- Clonar el repositorio desde git

`git clone https://gitlab.com/developers.zombie/new_delivery_api.git`

1.1- Ingresar a la carpeta creada al clonar el repositorio

`cd new_delivery_api`

2- Instalar las dependencias

`npm install`

3- Copia el archivo .env-example al archivo .env

`cp .env.example .env`

4- Configurar las variables de conexión

- DB_CONNECTION
- DB_HOST
- DB_PORT
- DB_DATABASE
- DB_USERNAME
- DB_PASSWORD
- PORT
- SALT
- TOKEN_SECRET

5- Inicia el proyecto

`npm run dev`

## API

### Singup

- URL

`/api/v1/singup`

- METHOD

GET

- Body

```
{

   "name": {

  "first": "super",

  "last": "mario"
},

   "email" : "supermario@gmail.com",

   "password" : "test"
}
```

- Response

```
{
    "_id": "5e9b8454affd5b3ec57e25be",
    "name": {
        "first": "super",
        "last": "mario"
    },
    "email": "supermairo@gmail.com",
    "password": "$2a$10$EvKsoXPDqnj2ScRz/4auUeFMvmu..VcSanpQJ6kgQZ9uSJRUjyJv.",
    "createdAt": "2020-04-18T22:51:00.536Z",
    "updatedAt": "2020-04-18T22:51:00.536Z",
    "__v": 0
}
```

### Login

- URL

`/api/v1/login`

- METHOD

POST

- Body

```
{

   "email" : "supermario@gmail.com",

   "password" : "test"

}
```

- Response

```
{
    "api_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjpbeyJuYW1lIjp7ImZpc
    nN0IjoiZnJhbmNpc2NvIiwibGFzdCI6ImNhbXBvcyJ9LCJfaWQiOiI1ZTliODQ1NGFmZmQ1YjNlYzU3ZTI1Y
    mUiLCJlbWFpbCI6ImNhbXF1aTIwMTFAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkRXZLc29YUERxbmo
    yU2NSei80YXVVZUZNdm11Li5WY1NhbnBRSjZrZ1FaOXVTSlJVanlKdi4iLCJjcmVhdGVkQXQiOiIyMDIwLTA0LTE
    4VDIyOjUxOjAwLjUzNloiLCJ1cGRhdGVkQXQiOiIyMDIwLTA0LTE4VDIyOjUxOjAwLjUzNloiLCJfX3YiOjB9XSwi
    ZXhwIjoxNTg4MTE0MzY1fQ.P7EdjQsyFNfJ9nuRdcEN45ezP01KYAd7hi5ZTqMSjzo"
}
```

### User

#### CRUD

- URL

`/api/v1/users`

- METHOD

GET

- Headers

```

   "Authorization" : "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjpbeyJuYW1lIjp7ImZpc
    nN0IjoiZnJhbmNpc2NvIiwibGFzdCI6ImNhbXBvcyJ9LCJfaWQiOiI1ZTliODQ1NGFmZmQ1YjNlYzU3ZTI1Y
    mUiLCJlbWFpbCI6ImNhbXF1aTIwMTFAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkRXZLc29YUERxbmo
    yU2NSei80YXVVZUZNdm11Li5WY1NhbnBRSjZrZ1FaOXVTSlJVanlKdi4iLCJjcmVhdGVkQXQiOiIyMDIwLTA0LTE
    4VDIyOjUxOjAwLjUzNloiLCJ1cGRhdGVkQXQiOiIyMDIwLTA0LTE4VDIyOjUxOjAwLjUzNloiLCJfX3YiOjB9XSwi
    ZXhwIjoxNTg4MTE0MzY1fQ.P7EdjQsyFNfJ9nuRdcEN45ezP01KYAd7hi5ZTqMSjzo"

```

- Response

```
{
    "name": {
    "first": "super",
    "last": "mario"
    },
    "_id": "5e9b8454affd5b3ec57e25be",
    "email": "supermario@gmail.com",
    "password": "$2a$10\$EvKsoXPDqnj2ScRz/4auUeFMvmu..VcSanpQJ6kgQZ9uSJRUjyJv.",
    "createdAt": "2020-04-18T22:51:00.536Z",
    "updatedAt": "2020-04-18T22:51:00.536Z"

}

```
