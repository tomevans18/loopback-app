const movies = require('../../server/__mocks__/movies');

module.exports = [
  {
    method: "GET",
    path: "/api/movies",
    response: {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      },
      body: movies,
    }
  }
]
