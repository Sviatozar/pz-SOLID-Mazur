import { LogProcessor } from '../O-OCP/refactored/LogProcessor.ts';
import { ErrorFilter } from '../O-OCP/refactored/ErrorFilter.ts';
import { WarningFilter } from '../O-OCP/refactored/WarningFilter.ts';
import { InfoFilter, JsonFilter, MarkdownFilter } from '../O-OCP/refactored/LogFilters.ts';

export function exampleOCP(): void {
  console.log('=== OCP Example: Log Filtering ===\n');
  
  const processor = new LogProcessor();

  const errorFilter = new ErrorFilter();
  const warningFilter = new WarningFilter();
  const infoFilter = new InfoFilter();
  const jsonFilter = new JsonFilter();
  const markdownFilter = new MarkdownFilter();

  console.log(processor.processLog('Database connection failed', errorFilter));
  console.log('\n' + processor.processLog('Memory usage is 85%', warningFilter));
  console.log('\n' + processor.processLog('User logged in successfully', infoFilter));
  console.log('\n' + processor.processLog('Request completed', jsonFilter));
  console.log('\n' + processor.processLog('All systems operational', markdownFilter));
}

exampleOCP();