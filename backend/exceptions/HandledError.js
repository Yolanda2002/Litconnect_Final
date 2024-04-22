class HandledError extends Error {
  constructor(message) {
    super(message);
  }
}

module.exports = HandledError;
