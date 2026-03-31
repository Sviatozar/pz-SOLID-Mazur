import { EmailSender } from '../D-DIP/refactored/EmailSender.ts';
import { SmsSender } from '../D-DIP/refactored/SmsSender.ts';
import { NotificationService } from '../D-DIP/refactored/NotificationService.ts';
import { UserService } from '../D-DIP/refactored/UserService.ts';

export function exampleDIP(): void {
  console.log('=== DIP Example ===');
  
  const emailSender = new EmailSender();
  const smsSender = new SmsSender();

  const emailNotificationService = new NotificationService(emailSender);
  const smsNotificationService = new NotificationService(smsSender);

  const userService1 = new UserService(emailNotificationService);
  const userService2 = new UserService(smsNotificationService);

  console.log('User registration with email:');
  userService1.registerUser('john@example.com');

  console.log('User registration with SMS:');
  userService2.registerUser('+1234567890');
}

exampleDIP();