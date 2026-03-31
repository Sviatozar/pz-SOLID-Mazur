import type { IUser } from './IUser';

export interface IReportGenerator {
  generateReport(users: IUser[]): string;
}
