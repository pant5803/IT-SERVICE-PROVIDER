const { z } = require("zod");

const signupschema = z.object({
  username: z
    .string({ required_error: "name is required" })
    .trim()
    .min(3, { message: "name must be atleast 3 chars long" })
    .max(254, { message: "name must not be more than 254 chars" }),

  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "invalid email" }),

  phone: z
    .string({ required_error: "phone is required " })
    .trim()
    .min(10, { message: "phone min 10 digits" })
    .max(10, { message: "phone max 10 digits" }),

  password: z
    .string({ required_error: "password is required" })
    .min(7, { message: "password must be 7 atleast chars long" })
    .max(1024, { message: "password must be less than 1024 characters" }),
});

module.exports = { signupschema };
