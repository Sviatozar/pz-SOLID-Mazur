import type { INotificationSender } from '../interfaces/INotificationSender';

export class SmsSender implements INotificationSender {
  send(recipient: string, message: string): void {
    console.log(`Sending SMS to ${recipient}: ${message}`);
  }
}