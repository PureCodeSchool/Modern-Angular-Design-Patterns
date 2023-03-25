import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimalActionsComponent } from './animal-actions.component';
import {PersonService} from "../../models/services/person.service";
import {FishService} from "../../models/services/fish.service";


describe('AnimalActionsComponent', () => {
  let component: AnimalActionsComponent;
  let fixture: ComponentFixture<AnimalActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimalActionsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test that the performAction method returns the correct action for a Person.
  it('should perform a walking action for a person', () => {
    const person = new PersonService();
    const action = component.performAction(person);
    expect(action).toEqual('The person is walking.');
  });

  // Test that the performAction method returns the correct action for a Fish.
  it('should perform a swimming action for a fish', () => {
    const fish = new FishService();
    const action = component.performAction(fish);
    expect(action).toEqual('The fish is swimming.');
  });
});
