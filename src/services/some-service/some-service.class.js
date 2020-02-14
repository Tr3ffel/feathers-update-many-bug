/* eslint-disable no-unused-vars */
exports.SomeService = class SomeService {
  setup(app) {
    this.app = app;
  }

  async create (data, params) {
    // realtime event returns user without password
    await this.app.service('users').patch(params.user._id, {
      name: 'test'
    });

    // realtime events returns user with password
    await this.app.service('users').patch(null, {
      name: 'qwertz'
    });

    return null;
  }
};
