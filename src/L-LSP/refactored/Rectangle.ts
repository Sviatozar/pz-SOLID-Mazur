import type { IRectangle } from '../interfaces/IRectangle';

export class Rectangle implements IRectangle {
  protected width: number = 0;
  protected height: number = 0;

  setWidth(width: number): void {
    this.width = width;
  }

  setHeight(height: number): void {
    this.height = height;
  }

  getWidth(): number {
    return this.width;
  }

  getHeight(): number {
    return this.height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}