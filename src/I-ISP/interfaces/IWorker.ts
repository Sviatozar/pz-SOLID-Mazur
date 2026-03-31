import type { IPerson } from './IPerson';

export interface IWorker extends IPerson {
  work(): void;
}