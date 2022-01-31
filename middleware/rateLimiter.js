const rateLimit = require("express-rate-limit");
module.exports.rateLmiter = rateLimit({
  handler: (req, res, next, options) =>
      res.status(options.statusCode).send({
        code:"limit_exceeded",
        message: "Limit exceeded"

      }),
    windowMs: 60000,
    max: 30,
  })

