var request = require("request");

var options = { method: 'POST',
  url: 'https://dev-v6dn22odsnvfctjt.us.auth0.com/oauth/token',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  form: {   
    client_id: "gpV7raW8h5zBkTsTpkevstsnTC3AEV5d",
    client_secret: "dk4kYpX4ZfY-cEI4aoYVmOUQ26JIeCB_V1gOSg-6ZnZatCr0BbrmEj-CZxcEVJYV",
    audience: "https://dev-v6dn22odsnvfctjt.us.auth0.com/api/v2/",
    grant_type:"client_credentials"   
     } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});