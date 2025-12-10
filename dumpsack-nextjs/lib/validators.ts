import { z } from 'zod';

export const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  source: z.string().default('site'),
  tags: z.array(z.string()).optional(),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;

