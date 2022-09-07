const errorHandler = (err, req, res, next) => {
  console.log("\x1b[33m%s\x1b[0m", err.stack);

  const errorMessage = {
    error: {
      message: err.message,
    },
  };
  if (err.name) {
    errorMessage.error.field = err.name;
  }
  return res.status(400).json(errorMessage);
};

module.exports = errorHandler;
