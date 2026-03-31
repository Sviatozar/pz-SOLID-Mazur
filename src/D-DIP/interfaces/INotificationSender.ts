export interface INotificationSender {
  send(recipient: string, message: string): void;
}