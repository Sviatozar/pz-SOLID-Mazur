import { Rectangle } from '../L-LSP/refactored/Rectangle.ts';
import { Square } from '../L-LSP/refactored/Square.ts';
import { calculateRectangleArea, calculateSquareArea } from '../L-LSP/refactored/ShapeActions.ts';

export function exampleLSP(): void {
  console.log('=== LSP Example: Shapes ===\n');
  
  const rectangle = new Rectangle();
  const square = new Square();
  
  console.log('Rectangle (width=5, height=4):');
  console.log(`Area: ${calculateRectangleArea(rectangle)}`);
  
  console.log('\nSquare (side=5):');
  console.log(`Area: ${calculateSquareArea(square)}`);
}

exampleLSP();