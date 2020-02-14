// Initializes the `some-service` service on path `/some-service`
const { SomeService } = require('./some-service.class');
const hooks = require('./some-service.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/some-service', new SomeService(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('some-service');

  service.hooks(hooks);
};
