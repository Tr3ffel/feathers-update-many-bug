module.exports = function(app) {
  if(typeof app.channel !== 'function') {
    return;
  }

  app.on('connection', connection => {
    app.channel('anonymous').join(connection);
  });

  app.on('login', (authResult, { connection }) => {
    if(connection) {
      const user = connection.user;
      app.channel('anonymous').leave(connection);
      app.channel('authenticated').join(connection);
      app.channel(`userIds/${user._id}`).join(connection);
    }
  });

  app.service('users').publish(user => {
    return [app.channel(`userIds/${user._id}`)];
  });
};

