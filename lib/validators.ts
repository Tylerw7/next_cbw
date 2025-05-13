import {z} from 'zod'

export const quoteFormValidator = z.object({
    name: z.string().min(2, 'Name is required'),
    phone: z.string().optional(),
    email: z.string().email('Must provide a valid email.'),
    description: z.string().min(10, 'Message must be at least 10 characters')
}) 