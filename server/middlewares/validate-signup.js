const validate = (schema) => async (req, res, next) => {
  try {
    const parsedbody = await schema.parseAsync(req.body);
    req.body = parsedbody;
    next();
  } catch (err) {
    const msg = err.errors[0].message;

    const errobj = {
      status: 400,
      message: "fill input properly",
      details: msg,
    };
    next(errobj);
  }
};

module.exports = { validate };
