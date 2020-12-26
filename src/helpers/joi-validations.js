const joi = require('@hapi/joi');

const registerValidation = (requestBody) => {
  const schema = joi
    .object({
      name: joi.string().min(6).required(),
      email: joi.string().min(6).required().email(),
      password: joi.string().min(6).required(),
    })
    .options({ abortEarly: false });

  const { error } = schema.validate(requestBody);
  if (!error) return null;

  const errors = error.details.map((error) => error.message);
  return errors;
};

const loginValidation = (requestBody) => {
  const schema = joi
    .object({
      email: joi.string().min(6).required().email(),
      password: joi.string().min(6).required(),
    })
    .options({ abortEarly: false });

  const { error } = schema.validate(requestBody);
  if (!error) return null;

  const errors = error.details.map((error) => error.message);
  return errors;
};

module.exports = {
  registerValidation,
  loginValidation,
};
