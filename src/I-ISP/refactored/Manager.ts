import type { IWorker } from '../interfaces/IWorker';
import type { IManager } from '../interfaces/IManager';

export class Manager implements IWorker, IManager {
  eat(): void {
    console.log('Manager is eating');
  }

  sleep(): void {
    console.log('Manager is sleeping');
  }

  work(): void {
    console.log('Manager is working');
  }

  manage(): void {
    console.log('Manager is managing');
  }
}