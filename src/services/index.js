const users = require('./users/users.service.js');
const someService = require('./some-service/some-service.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(someService);
};
