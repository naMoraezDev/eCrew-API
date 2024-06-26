import { z } from "zod";

export const matchListQuerySchema = z.object({
  page: z.string().optional(),
  filter: z.string().optional(),
  per_page: z.string().optional(),
  filter_type: z.string().optional(),
});
