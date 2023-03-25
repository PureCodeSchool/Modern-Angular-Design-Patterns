import {RectangleService} from "./rectangle.service";

// Square class extends the Rectangle class to calculate its area.
export class SquareService extends RectangleService {
  constructor(sideLength: number) {
    super(sideLength, sideLength);
  }
}
