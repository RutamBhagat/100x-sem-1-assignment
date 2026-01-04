import type { UserRole } from "@100x-sem-1-assignment/db";
import { Hono } from "hono";
import { z } from "zod";

export const attendanceRouter = new Hono();

const startAttendanceSchema = z.object({
  classId: z.uuid(),
});

type ActiveSession = {
  classId: string;
  startedAt: string;
  attendance: Record<string, UserRole>;
} | null;

let activeSession: ActiveSession = null;
