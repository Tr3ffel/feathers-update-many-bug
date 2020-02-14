const app = require('../../src/app');

describe('\'some-service\' service', () => {
  it('registered the service', () => {
    const service = app.service('some-service');
    expect(service).toBeTruthy();
  });
});
