import { z } from 'zod';

export const bookFormSchema = z.object({
  reason: z.enum(['career', 'kids', 'abroad', 'exams', 'hobby'], {
    errorMap: () => ({ message: 'Please choose main reason!' }),
  }),
  name: z.string().min(3),
  email: z.string().email(),
  number: z.string().min(10),
});

export type BookFormData = z.infer<typeof bookFormSchema>;
