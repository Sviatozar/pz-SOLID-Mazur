import type { INotificationSender } from './INotificationSender';

export interface INotificationService {
  notify(recipient: string, message: string): void;
}