import { User } from '../S-SRP/refactored/User.ts';
import { UserRepository } from '../S-SRP/refactored/UserRepository.ts';
import { EmailService } from '../S-SRP/refactored/EmailService.ts';
import { ReportGenerator } from '../S-SRP/refactored/ReportGenerator.ts';
import { UserValidator } from '../S-SRP/refactored/UserValidator.ts';

export function exampleSRP(): void {
  console.log('=== SRP Example ===');
  
  const repository = new UserRepository();
  const emailService = new EmailService();
  const reportGenerator = new ReportGenerator();
  const validator = new UserValidator();

  const user1 = new User(1, 'John Doe', 'john@example.com');
  const user2 = new User(2, 'Jane Smith', 'jane@example.com');

  repository.addUser(user1);
  repository.addUser(user2);

  if (validator.validateEmail(user1.email)) {
    emailService.sendEmail(user1.email, 'Welcome', 'Welcome to our service!');
  }

  const report = reportGenerator.generateReport(repository.getAllUsers());
  console.log(report);
}

exampleSRP();