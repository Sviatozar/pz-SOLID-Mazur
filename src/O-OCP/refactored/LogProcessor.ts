import type { ILogFilter } from '../interfaces/ILogFilter';

export class LogProcessor {
  processLog(log: string, filter: ILogFilter): string {
    return filter.filter(log);
  }
}