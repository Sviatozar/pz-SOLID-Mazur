export class UserValidator {
  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  validateName(name: string): boolean {
    return name.trim().length > 0;
  }

  validateId(id: number): boolean {
    return id > 0;
  }
}