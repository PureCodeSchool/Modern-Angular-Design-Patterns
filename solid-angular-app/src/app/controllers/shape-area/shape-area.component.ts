import { Component, OnInit } from '@angular/core';
import {Shape} from "../../models/interfaces/shape.interface";

@Component({
  selector: 'app-shape-area',
  templateUrl: '../../views/shape-area/shape-area.component.html',
  styleUrls: ['../../views/shape-area/shape-area.component.css']
})
export class ShapeAreaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Calculate the area of a shape using the getArea method from the Shape interface.
  getArea(shape: Shape): number {
    return shape.getArea();
  }
}
