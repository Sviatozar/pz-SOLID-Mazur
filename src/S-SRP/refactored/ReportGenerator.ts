import type { IReportGenerator } from '../interfaces/IReportGenerator';
import type { IUser } from '../interfaces/IUser';

export class ReportGenerator implements IReportGenerator {
  generateReport(users: IUser[]): string {
    return `Total users: ${users.length}\nUsers: ${users.map(u => u.name).join(', ')}`;
  }
}
