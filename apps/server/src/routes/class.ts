import { Hono } from "hono";
import { z } from "zod";

export const classRouter = new Hono();

const createClassSchema = z.object({
  className: z.string().min(1),
});

const addStudentSchema = z.object({
  studentId: z.uuid(),
});
