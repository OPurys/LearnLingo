import { z } from 'zod';

export const registerFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
});

export type FormData = z.infer<typeof registerFormSchema>;
