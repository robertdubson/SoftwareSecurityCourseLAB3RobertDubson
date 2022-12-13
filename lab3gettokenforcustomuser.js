var request = require("request");

var options = { method: 'POST',
  url: 'https://dev-v6dn22odsnvfctjt.us.auth0.com/oauth/token',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  form:
   { grant_type: 'password',
     username: 'dubson2001@gmail.com',
     password: 'IT9309newpass',
     audience: 'https://dev-v6dn22odsnvfctjt.us.auth0.com/api/v2/',
     scope: 'offline_access',
     client_id: 'gpV7raW8h5zBkTsTpkevstsnTC3AEV5d',
     client_secret: 'dk4kYpX4ZfY-cEI4aoYVmOUQ26JIeCB_V1gOSg-6ZnZatCr0BbrmEj-CZxcEVJYV',
     realm: 'Username-Password-Authentication' }
   };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});