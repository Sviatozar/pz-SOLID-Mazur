import type { INotificationSender } from '../interfaces/INotificationSender';

export class EmailSender implements INotificationSender {
  send(recipient: string, message: string): void {
    console.log(`Sending email to ${recipient}: ${message}`);
  }
}