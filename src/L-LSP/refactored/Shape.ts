import type { IShape } from '../interfaces/IShape';

export class Shape implements IShape {
  getArea(): number {
    throw new Error('Shape must implement getArea()');
  }
}