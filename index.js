const UserController = require("./controllers/UserController.js");

exports.handler = async (event) => {
  let dataUser = null;

  switch (event.path) {
    case "/simpleUserFunction/getUserData":
      dataUser = UserController.getUserData(event.httpMethod);
      break;

    case "/simpleUserFunction/getUserJson":
      UserController.getUserJson(event.httpMethod);
      break;

    default:
      return {
        statusCode: 500,
        body: JSON.stringify({
          message: "This path is not supported by the API",
        }),
      };
  }

  const response = {
    statusCode: dataUser.statusCode,
    body: JSON.stringify(
      dataUser.message ? { message: dataUser.message } : dataUser.values
    ),
  };
  return response;
};
