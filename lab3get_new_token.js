var request = require("request");

var options = { method: 'POST',
  url: 'https://kpi.eu.auth0.com/oauth/token',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  form:
   { username: 'robert.dubson@gmail.com',
     password: 'KAgT3Hhj',
     grant_type: 'http://auth0.com/oauth/grant-type/password-realm',
     client_id: 'JIvCO5c2IBHlAe2patn6l6q5H35qxti0',
     client_secret: 'ZRF8Op0tWM36p1_hxXTU-B0K_Gq_-eAVtlrQpY24CasYiDmcXBhNS6IJMNcz1EgB',
     realm: 'Username-Password-Authentication',
     refresh_token: "cOAuQLa1v_nKTh3fDqB_I6Iaq1_XcJkVo3EmIBgSOPi7K"}
   };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});