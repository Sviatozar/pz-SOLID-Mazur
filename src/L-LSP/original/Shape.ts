export class Shape {
  getArea(): number {
    throw new Error('Shape must implement getArea()');
  }

  getWidth(): number {
    throw new Error('Shape must implement getWidth()');
  }

  setWidth(width: number): void {
    throw new Error('Shape must implement setWidth()');
  }
}

export class Rectangle extends Shape {
  protected width: number = 0;
  protected height: number = 0;

  override getArea(): number {
    return this.width * this.height;
  }

  override getWidth(): number {
    return this.width;
  }

  override setWidth(width: number): void {
    this.width = width;
  }

  setHeight(height: number): void {
    this.height = height;
  }
}

export class Square extends Rectangle {
  override setWidth(width: number): void {
    this.width = width;
  }
}

export function printShape(shape: Shape): void {
  shape.setWidth(5);
  const area = shape.getArea();
  console.log(`Area with width 5: ${area}`);
}