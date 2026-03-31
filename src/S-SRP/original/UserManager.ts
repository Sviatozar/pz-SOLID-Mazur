export class User {
  id: number;
  name: string;
  email: string;

  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

export class UserManager {
  private users: User[] = [];

  addUser(user: User): void {
    this.users.push(user);
  }

  getUser(id: number): User | undefined {
    return this.users.find(u => u.id === id);
  }

  sendEmail(userId: number, subject: string, message: string): void {
    const user = this.getUser(userId);
    if (user) {
      console.log(`Sending email to ${user.email}: ${subject} - ${message}`);
    }
  }

  saveToDatabase(user: User): void {
    console.log(`Saving user ${user.name} to database`);
  }

  generateReport(): string {
    return `Total users: ${this.users.length}\nUsers: ${this.users.map(u => u.name).join(', ')}`;
  }

  validateUserEmail(email: string): boolean {
    return email.includes('@');
  }
}
