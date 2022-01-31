const router = require("express").Router();
const jwt = require("jsonwebtoken");
const { getUserCollection } = require("../config/database");
const bcrypt = require("bcrypt");
let userCollection = getUserCollection();
router.post("/signin", (req, res) => {
  const { username, password } = req.body;
  if (!(username && password)) {
    setStatusAndMsg(res, "bad_request", "Invalid data", 400);
  }
  try {
    userCollection
      .orderByChild("username")
      .equalTo(username)
      .once(
        "value",
        (snapshot) => {
          if (snapshot.exists()) {
            const key = Object.keys(snapshot.val())[0];
            const dbPwd = snapshot.val()[key].password;
            bcrypt.compare(password, dbPwd,  function (err, result) {
              if (result) {
                const token = jwt.sign({ username }, process.env.SECRET_MSG, {
                  expiresIn: "1d",
                });
                setStatusAndMsg(
                  res,
                  "logged_in",
                  "You have successfully logged in",
                  200,
                  token
                );
              } else {
                setStatusAndMsg(
                  res,
                  "invalid_password",
                  "Invalid password",
                  200
                );
              }
            });
          } else {
            setStatusAndMsg(
              res,
              "invalid_username",
              "User profile not found",
              200
            );
          }
        },
        (error) => {
          setStatusAndMsg(res, "failed", "Something went wrong", 500);
        }
      );
  } catch (e) {
    setStatusAndMsg(res, "failed", "Something went wrong", 500);
  }
});

router.post("/register", (req, res) => {
  const { username, password } = req.body;
  if (!(username && password)) {
    setStatusAndMsg(res, "bad_request", "Invalid data", 400);
  }
  try {
    userCollection
      .orderByChild("username")
      .equalTo(username)
      .once(
        "value",
        (snapshot) => {
          if (snapshot.exists()) {
            setStatusAndMsg(
              res,
              "username_exist",
              "This username is already in use.",403
            );
          } else {
            bcrypt.hash(password, 10, (err, hash) => {
              if (err) {
                next(err);
              } else {
                userCollection.push(
                  {
                    username: username,
                    password: hash,
                  },
                  (e) => {
                    if (e) {
                      setStatusAndMsg(
                        res,
                        "retry",
                        "Couldn't create user profile. Please try again after sometime",403
                      );
                    } else {
                      setStatusAndMsg(
                        res,
                        "success",
                        "your User profile is successfully created"
                      );
                    }
                  }
                );
              }
            });
          }
        },
        (error) => {
          setStatusAndMsg(res, "failed", "Something went wrong", 500);
        }
      );
  } catch (e) {
    setStatusAndMsg(res, "failed", "Something went wrong", 500);
  }
});

const setStatusAndMsg = (res, code, message, status = 200, token = null) => {
  res.status(status);
  let response = {
    code,
    message,
  };
  if (token) {
    response["token"] = token;
  }
  res.send(response);
};
module.exports = router;
