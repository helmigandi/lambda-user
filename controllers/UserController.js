const fs = require("fs");

class UserController {
  static getUserData(httpMethod) {
    const data = this.getUserFile(httpMethod);

    return {
      statusCode: 200,
      values: data,
    };
  }

  static getUserJson(httpMethod) {
    const data = this.getUserFile(httpMethod);

    return {
      statusCode: 200,
      headers: {
        "Content-type": "application/json",
        "Content-Disposition": "attachment; filename=user-data.json",
      },
      values: data,
    };
  }

  static getUserFile(httpMethod) {
    if (httpMethod != "GET") {
      return {
        statusCode: 500,
        message: "HTTP Method is Not Supported",
      };
    }
    try {
      let data = fs.readFileSync("/var/task/data/users.json");
      data = JSON.parse(data);
      return data;
    } catch (err) {
      return {
        statusCode: 500,
        message: err.message,
      };
    }
  }
}

module.exports = UserController;
