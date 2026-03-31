import type { IEmailService } from '../interfaces/IEmailService';

export class EmailService implements IEmailService {
  sendEmail(email: string, subject: string, message: string): void {
    console.log(`Sending email to ${email}: ${subject} - ${message}`);
  }
}
