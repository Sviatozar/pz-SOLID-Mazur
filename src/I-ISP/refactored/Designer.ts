import type { IWorker } from '../interfaces/IWorker';
import type { IDesigner } from '../interfaces/IDesigner';

export class Designer implements IWorker, IDesigner {
  eat(): void {
    console.log('Designer is eating');
  }

  sleep(): void {
    console.log('Designer is sleeping');
  }

  work(): void {
    console.log('Designer is working');
  }

  design(): void {
    console.log('Designer is designing');
  }
}