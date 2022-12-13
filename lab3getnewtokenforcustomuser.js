var request = require("request");

var options = { method: 'POST',
  url: 'https://dev-v6dn22odsnvfctjt.us.auth0.com/oauth/token',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  form:
   { username: 'dubson2001@gmail.com',
     password: 'UU2qsDc4',
     grant_type: 'http://auth0.com/oauth/grant-type/password-realm',
     client_id: 'gpV7raW8h5zBkTsTpkevstsnTC3AEV5d',
     client_secret: 'dk4kYpX4ZfY-cEI4aoYVmOUQ26JIeCB_V1gOSg-6ZnZatCr0BbrmEj-CZxcEVJYV',
     realm: 'Username-Password-Authentication',
     refresh_token: "tUuUwyOjavgiX2ni03xcKDaowb9jBWm2FTnVY4ffJoqWx"}
   };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});