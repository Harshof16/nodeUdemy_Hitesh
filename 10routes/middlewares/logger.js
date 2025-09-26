const { appendFileSync } = require("fs");
exports.loggerMiddleware = (req, res, next) => {
  const log = `\n[${Date.now()}]: ${req.method} ${req.path}`;
  appendFileSync("log.txt", log, "utf-8");
  next();
}