import type { ILogFilter } from '../interfaces/ILogFilter';

export class ErrorFilter implements ILogFilter {
  filter(log: string): string {
    return `X [ERROR] ${log}`;
  }
}