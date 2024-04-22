const HandledError = require('./HandledError');

class ForbiddenError extends HandledError {
  code = 403;
  constructor(msg) {
    super(msg || 'Token is missing or invalid.');
  }
}

module.exports = ForbiddenError;
