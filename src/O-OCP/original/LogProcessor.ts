export class LogProcessor {
  processLog(log: string, filterType: string): string {
    if (filterType === 'error') {
      console.log(`[ERROR] ${log}`);
      return this.highlightErrors(log);
    } else if (filterType === 'warning') {
      console.log(`[WARNING] ${log}`);
      return this.highlightWarnings(log);
    } else if (filterType === 'info') {
      console.log(`[INFO] ${log}`);
      return this.formatInfo(log);
    } else if (filterType === 'json') {
      console.log(`[JSON] ${log}`);
      return this.formatAsJson(log);
    } else if (filterType === 'markdown') {
      console.log(`[MARKDOWN] ${log}`);
      return this.formatAsMarkdown(log);
    }
    return log;
  }

  private highlightErrors(log: string): string {
    return `Х ${log}`;
  }

  private highlightWarnings(log: string): string {
    return `!  ${log}`;
  }

  private formatInfo(log: string): string {
    return `i  ${log}`;
  }

  private formatAsJson(log: string): string {
    return JSON.stringify({ message: log, timestamp: new Date().toISOString() }, null, 2);
  }

  private formatAsMarkdown(log: string): string {
    return `- ${log}`;
  }
}