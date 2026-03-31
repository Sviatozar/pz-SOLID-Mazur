import type { ISquare } from '../interfaces/ISquare';

export class Square implements ISquare {
  private side: number = 0;

  setSide(side: number): void {
    this.side = side;
  }

  getSide(): number {
    return this.side;
  }

  getArea(): number {
    return this.side * this.side;
  }
}