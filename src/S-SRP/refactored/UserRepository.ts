import type { IRepository } from '../interfaces/IRepository';
import type { IUser } from '../interfaces/IUser';

export class UserRepository implements IRepository {
  private users: IUser[] = [];

  addUser(user: IUser): void {
    this.users.push(user);
  }

  getUser(id: number): IUser | undefined {
    return this.users.find(u => u.id === id);
  }

  getAllUsers(): IUser[] {
    return [...this.users];
  }
}

