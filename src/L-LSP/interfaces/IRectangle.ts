export interface IRectangle {
  setWidth(width: number): void;
  setHeight(height: number): void;
  getWidth(): number;
  getHeight(): number;
  getArea(): number;
}