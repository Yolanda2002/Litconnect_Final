const HandledError = require('./HandledError');

class UnauthorizedError extends HandledError {
  code = 401;
  constructor() {
    super('Unauthorized.');
  }
}

module.exports = UnauthorizedError;
