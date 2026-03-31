export interface ILogFilter {
  filter(log: string): string;
}