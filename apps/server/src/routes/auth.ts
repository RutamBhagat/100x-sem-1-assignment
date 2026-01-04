import { Hono } from "hono";
import { z } from "zod";

export const authRouter = new Hono();

const signupSchema = z.object({
  name: z.string().min(1),
  email: z.email(),
  password: z.string().min(6),
  role: z.enum(["teacher", "student"]),
});

const loginSchema = z.object({
  email: z.email(),
  password: z.string(),
});
