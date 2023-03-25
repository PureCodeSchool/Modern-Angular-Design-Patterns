import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ShapeAreaComponent} from './shape-area.component';
import {RectangleService} from "../../models/services/rectangle.service";
import {SquareService} from "../../models/services/square.service";


describe('ShapeAreaComponent', () => {
  let component: ShapeAreaComponent;
  let fixture: ComponentFixture<ShapeAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShapeAreaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShapeAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test that the getArea method returns the correct area for a Rectangle.
  it('should calculate the area of a rectangle', () => {
    const rectangle = new RectangleService(4, 5);
    const area = component.getArea(rectangle);
    expect(area).toEqual(20);
  });

  // Test that the getArea method returns the correct area for a Square.
  it('should calculate the area of a square', () => {
    const square = new SquareService(4);
    const area = component.getArea(square);
    expect(area).toEqual(16);
  });
});
