import { Hono } from "hono";
import { z } from "zod";

export const attendanceRouter = new Hono();

export const startAttendanceSchema = z.object({
  classId: z.uuid(),
});
