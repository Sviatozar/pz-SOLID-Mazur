import type { ILogFilter } from '../interfaces/ILogFilter';

export class InfoFilter implements ILogFilter {
  filter(log: string): string {
    return `i [INFO] ${log}`;
  }
}

export class JsonFilter implements ILogFilter {
  filter(log: string): string {
    return JSON.stringify(
      { message: log, timestamp: new Date().toISOString(), level: 'debug' },
      null,
      2
    );
  }
}

export class MarkdownFilter implements ILogFilter {
  filter(log: string): string {
    return `- **${new Date().toISOString()}** - ${log}`;
  }
}