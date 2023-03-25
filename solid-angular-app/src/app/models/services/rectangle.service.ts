import { Shape } from '../interfaces/shape.interface';

// Rectangle class implements the ShapeInterface interface to calculate its area.
export class RectangleService implements Shape {
  constructor(public width: number, public height: number) {}

  // Calculate and return the area of the rectangle.
  getArea(): number {
    return this.width * this.height;
  }
}
