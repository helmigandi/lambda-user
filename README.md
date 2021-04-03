# lambda-user
Program that create 2 API use NodeJs with AWS Lambda.
1. API 1 will return as JSON array of object.
2. API 2 will return JSON file.

## Get User Data Deploy Link
[https://n34hk9ur3e.execute-api.ap-southeast-1.amazonaws.com/default/simpleUserFunction/getUserData](https://n34hk9ur3e.execute-api.ap-southeast-1.amazonaws.com/default/simpleUserFunction/getUserData)

## Get User Json File Deploy Link
[https://n34hk9ur3e.execute-api.ap-southeast-1.amazonaws.com/default/simpleUserFunction/getUserJson](https://n34hk9ur3e.execute-api.ap-southeast-1.amazonaws.com/default/simpleUserFunction/getUserJson)

## API DOCUMENTATION

### Endpoints
- **`GET /getUserData`**
- **`GET /getUserJson`**

### Usage Endpoints

#### GET Users Data
- **URL**   
  **`/getUserData`**

- **Method**   
  `GET`

- **Success Response:**   
  **Code:** 200 SUCCESS   
  **Content:**   
  ```json
  [
    {
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "city": "Gwenborough",
        "zipcode": "92998-3874"
      },
      "phone": "1-770-736-8031 x56442"
    },
    ...
  ]
  ```

- **Failed Response:**   
  **Code:** 500 Internal Server Error   
  **Content:**
  ```json
  {
    "message": "This path is not supported by the API"
  }
  ```
  **Code:** 500 Internal Server Error   
  **Content:**
  ```json
  {
    "message": "HTTP Method is Not Supported"
  }
  ```

#### GET Users Data Json File
- **URL**   
  **`/getUserJson`**

- **Method**   
  `GET`

- **Success Response:**   
  **Code:** 200 SUCCESS   
  **Content:** Downloading JSON File

- **Failed Response:**   
  **Code:** 500 Internal Server Error   
  **Content:**
  ```json
  {
    "message": "This path is not supported by the API"
  }
  ```
  **Code:** 500 Internal Server Error   
  **Content:**
  ```json
  {
    "message": "HTTP Method is Not Supported"
  }
  ```