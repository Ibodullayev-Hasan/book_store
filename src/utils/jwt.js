const jwt = require("jsonwebtoken");

const signIn = (payload) => {
  return jwt.sign(payload, "myAccess_token");
};
const verify = (token) => {
  try {
    return jwt.verify(token, "myAccess_token");
  } catch (error) {
    return {};
  }
};

module.exports = {
  signIn,
  verify,
};
