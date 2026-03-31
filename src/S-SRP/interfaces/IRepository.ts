import type { IUser } from './IUser';

export interface IRepository {
  addUser(user: IUser): void;
  getUser(id: number): IUser | undefined;
  getAllUsers(): IUser[];
}