const HandledError = require('./HandledError');

class InvalidEntryError extends HandledError {
  code = 400;
  constructor(mes) {
    super(mes || 'Invalid data');
  }
}

module.exports = InvalidEntryError;
