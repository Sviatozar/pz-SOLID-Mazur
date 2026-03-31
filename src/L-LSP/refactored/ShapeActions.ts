import type { IRectangle } from '../interfaces/IRectangle';
import type { ISquare } from '../interfaces/ISquare';

export function calculateRectangleArea(rectangle: IRectangle): number {
  rectangle.setWidth(5);
  rectangle.setHeight(4);
  return rectangle.getArea();
}

export function calculateSquareArea(square: ISquare): number {
  square.setSide(5);
  return square.getArea();
}