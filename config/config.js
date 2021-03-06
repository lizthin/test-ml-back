module.exports = {
  PORT: process.env.PORT || 3001,
  SECRET_TOKEN: process.env.SECRET_TOKEN || "secret-token-mercado-libre",
  EXPIRATION_TOKEN: process.env.EXPIRATION_TOKEN || 60 * 60,
};
