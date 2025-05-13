'use server'

import {Resend} from 'resend'
import { quoteFormValidator } from '@/lib/validators'


//Resend connection
const resend = new Resend(process.env.RESEND_API_KEY)


//Form submission via email through resen
export const quoteSubmitionForm = async (prev: unknown, formData: FormData) => {
    try {
        const quote = quoteFormValidator.parse({
            name: formData.get("name"),
            phone: formData.get("phone"),
            email: formData.get('email'),
            description: formData.get('description')
        })

        await resend.emails.send({
            from: 'Your Company <info@preciouswettachart.com>',
            to: quote.email,
            subject: 'New Quote Request',
            html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
            <div style="text-align: center; margin-bottom: 30px;">
                <img src="https://preciouswettachart.com/images/black_logo.png" alt="Spring Bay Construction Logo" style="max-width: 150px; margin-bottom: 10px;" />
                <h2 style="margin: 0; font-size: 24px; color: #333;">Cabinetry by Wettach</h2>
            </div>

            <div style="font-size: 16px; color: #333;">
                <p><strong>Name:</strong> ${quote.name}</p>
                <p><strong>Phone:</strong> ${quote.phone}</p>
                <p><strong>Email:</strong> ${quote.email}</p>
                <p><strong>Description:</strong></p>
                <p style="background-color: #f9f9f9; padding: 10px; border-radius: 6px;">${quote.description}</p>
            </div>
            </div>
        `,
        })

        
        return {success: true, message: 'Email sent successfully'}
    } catch (err) {
        console.log(err)
        return {success: false, message: 'Email not sent, error.'}
    }
}