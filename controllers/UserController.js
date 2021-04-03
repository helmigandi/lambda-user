const fs = require("fs");

class UserController {
  static getUserData(httpMethod) {
    if (httpMethod != "GET") {
      return {
        statusCode: 500,
        message: "HTTP Method is Not Supported",
      };
    }
    try {
      let data = fs.readFileSync("/var/task/data/users.json");
      data = JSON.parse(data);
      return {
        statusCode: 200,
        values: data,
      };
    } catch (err) {
      return {
        statusCode: 500,
        message: err.message,
      };
    }
  }

  static getUserJson(httpMethod) {
    if (httpMethod != "GET") {
      return {
        statusCode: 500,
        message: "HTTP Method is Not Supported",
      };
    }
    try {
      let data = fs.readFileSync("/var/task/data/users.json");
      data = JSON.parse(data);
      return {
        statusCode: 200,
        headers: {
          'Content-type' : 'application/json',
          'Content-Disposition': 'attachment; filename=user-data.json'
        },
        values: data,
      };
    } catch (err) {
      console.log("CATCH", err);
      return {
        statusCode: 500,
        message: err.message,
      };
    }
  }
}

module.exports = UserController;
