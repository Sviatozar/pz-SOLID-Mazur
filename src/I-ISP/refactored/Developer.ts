import type { IWorker } from '../interfaces/IWorker';
import type { ICoder } from '../interfaces/ICoder';

export class Developer implements IWorker, ICoder {
  eat(): void {
    console.log('Developer is eating');
  }

  sleep(): void {
    console.log('Developer is sleeping');
  }

  work(): void {
    console.log('Developer is working');
  }

  code(): void {
    console.log('Developer is coding');
  }
}