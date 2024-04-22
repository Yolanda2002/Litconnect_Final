const HandledError = require('./HandledError');

class UserAlreadyExistsError extends HandledError {
  code = 403;
  constructor() {
    super('This user already exists.');
  }
}

module.exports = UserAlreadyExistsError;
