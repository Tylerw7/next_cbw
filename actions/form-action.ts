'use server';

import { Resend } from 'resend';
import { quoteFormValidator, formSchema } from '@/lib/validators';

const resend = new Resend(process.env.RESEND_API_KEY);

export const quoteSubmitionForm = async (prev: unknown, formData: FormData) => {
  try {
    const quote = quoteFormValidator.parse({
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      description: formData.get('description'),
    });

    await resend.emails.send({
      from: 'Cabinetry by Wettach <info@preciouswettachart.com>',
      to: 't4wettach@gmail.com',
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
    });

    return { success: true, message: 'Email sent successfully' };
  } catch (err) {
    console.error(err);
    return { success: false, message: 'Email not sent, error.' };
  }
};




export const hiringApplicationForm = async (prev: unknown, formData: FormData) => {
  try {
    const form = formSchema.parse({
      first_name: formData.get('first_name'),
      last_name: formData.get('last_name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      startdate: formData.get('startdate'),
      experience: formData.get('experience'),
    });

    await resend.emails.send({
      from: 'Cabinetry by Wettach <info@preciouswettachart.com>',
      to: 't4wettach@gmail.com',
      subject: `New Job Application: ${form.first_name} ${form.last_name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <img src="https://preciouswettachart.com/images/black_logo.png" alt="Company Logo" width="150" />
          <h2>New Job Application</h2>
          <p><strong>Name:</strong> ${form.first_name} ${form.last_name}</p>
          <p><strong>Email:</strong> ${form.email}</p>
          <p><strong>Phone:</strong> ${form.phone}</p>
          <p><strong>Experience:</strong> ${form.experience}</p>
          <p><strong>Start Date:</strong> ${form.startdate || 'Not specified'}</p>
        </div>
      `,
    });

    return { success: true, message: 'Application sent successfully.' };
  } catch (error) {
    console.error('Hiring form error:', error);
    return { success: false, message: 'Something went wrong. Please try again.' };
  }
};

