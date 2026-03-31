import type { INotificationService } from '../interfaces/INotificationService';

export class UserService {
  private notificationService: INotificationService;

  constructor(notificationService: INotificationService) {
    this.notificationService = notificationService;
  }

  registerUser(recipient: string): void {
    console.log(`User registered: ${recipient}`);
    this.notificationService.notify(recipient, 'Welcome!');
  }
}