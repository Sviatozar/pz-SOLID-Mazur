import type { IWorker } from '../interfaces/IWorker';
import type { ITester } from '../interfaces/ITester';

export class Tester implements IWorker, ITester {
  eat(): void {
    console.log('Tester is eating');
  }

  sleep(): void {
    console.log('Tester is sleeping');
  }

  work(): void {
    console.log('Tester is working');
  }

  test(): void {
    console.log('Tester is testing');
  }
}