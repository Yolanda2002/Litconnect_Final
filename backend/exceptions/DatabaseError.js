const HandledError = require('./HandledError');

class DatabaseError extends HandledError {
  code = 500;
  constructor() {
    super('Database error');
  }
}

module.exports = DatabaseError;
