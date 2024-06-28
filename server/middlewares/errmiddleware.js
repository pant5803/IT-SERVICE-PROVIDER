const errmiddleware = (err, req, res, next) => {
  const status = err.status || 400;
  const msg = err.message || "backend error";
  const details = err.details || "backend error";

  console.log({ msg, details });

  return res.status(status).json({ message: msg, details });
};

module.exports = { errmiddleware };
