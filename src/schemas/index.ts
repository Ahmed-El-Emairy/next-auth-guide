import * as z from "zod";

export const LoginSchema = z.object({
  email: z.email({
    error: "Email is Required",
  }), //Add Custom Error Handling
  password: z.string().min(1, {
    error: "Password is Resquired",
  }),
});
