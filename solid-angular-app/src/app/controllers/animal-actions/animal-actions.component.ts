import { Component, OnInit } from '@angular/core';
import {Animal} from "../../models/interfaces/animal.interface";

@Component({
  selector: 'app-animal-actions',
  templateUrl: '../../views/animal-actions/animal-actions.component.html',
  styleUrls: ['../../views/animal-actions/animal-actions.component.css']
})
export class AnimalActionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Perform an action using the performAction method from the Animal interface.
  performAction(animal: Animal): string {
    return animal.performAction();
  }

}
