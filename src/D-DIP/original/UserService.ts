export class EmailSender {
  send(email: string, message: string): void {
    console.log(`Sending email to ${email}: ${message}`);
  }
}

export class NotificationService {
  private emailSender: EmailSender = new EmailSender();

  notify(email: string, message: string): void {
    this.emailSender.send(email, message);
  }
}

export class UserService {
  private notificationService: NotificationService = new NotificationService();

  registerUser(email: string): void {
    console.log(`User registered: ${email}`);
    this.notificationService.notify(email, 'Welcome!');
  }
}

