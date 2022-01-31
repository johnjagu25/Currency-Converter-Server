const jwt = require("jsonwebtoken");
module.exports = {
  tokenValidation: (req, res, next) => {
    const authHeader = req.headers.authorization;
    let result;
    if (authHeader) {
      const token = authHeader.split(" ")[1]; 
      const options = {
        expiresIn: "1d",
      };
      try {
        result = jwt.verify(token,process.env.SECRET_MSG, options);
        next();
      } catch (err) {
        res.status(401).send({
          code : "not_authorized",
          message:"Authentication error. Token required."
        });
      }
    } else {
      res.status(401).send({
        code : "not_authorized",
        message:"Authentication error. Token required."
      });
    }
  }
};
