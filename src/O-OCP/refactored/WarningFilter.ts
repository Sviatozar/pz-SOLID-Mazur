import type { ILogFilter } from '../interfaces/ILogFilter';

export class WarningFilter implements ILogFilter {
  filter(log: string): string {
    return `!  [WARNING] ${log}`;
  }
}