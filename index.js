const UserController = require("./controllers/UserController.js");

exports.handler = async (event) => {
  let dataUser = null;

  switch (event.path) {
    case "/simpleUserFunction/getUserData":
      dataUser = UserController.getUserData(event.httpMethod);
      break;

    case "/simpleUserFunction/getUserJson":
      dataUser = UserController.getUserJson(event.httpMethod);
      break;

    default:
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: "This path is not supported by the API",
        }),
      };
  }

  let response = {};
  if (dataUser.headers) {
    response = {
      statusCode: dataUser.statusCode,
      headers: dataUser.headers,
      body: JSON.stringify(dataUser.values, null, 2),
    };
  } else {
    response = {
      statusCode: dataUser.statusCode,
      body: JSON.stringify(
        dataUser.message ? { message: dataUser.message } : dataUser.values
      ),
    };
  }
  return response;
};
