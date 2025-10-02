import * as z from "zod";

export const LoginSchema = z.object({
  email: z.email({
    error: "Email is Required",
  }), //Add Custom Error Handling
  password: z.string().min(1, {
    error: "Password is Resquired",
  }),
});

export const RegisterSchema = z.object({
  name: z.string().min(1, {
    error: "Name is Required",
  }),
  email: z.email({
    error: "Email is Required",
  }),
  password: z.string().min(8, {
    error: "Minimum 8 characters",
  }),
});
