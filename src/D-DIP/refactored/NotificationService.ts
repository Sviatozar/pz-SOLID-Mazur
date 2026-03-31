import type { INotificationSender } from '../interfaces/INotificationSender';
import type { INotificationService } from '../interfaces/INotificationService';

export class NotificationService implements INotificationService {
  private sender: INotificationSender;

  constructor(sender: INotificationSender) {
    this.sender = sender;
  }

  notify(recipient: string, message: string): void {
    this.sender.send(recipient, message);
  }
}