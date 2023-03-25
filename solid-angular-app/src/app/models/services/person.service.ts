import { Animal } from '../interfaces/animal.interface';

// Person class implements the Animal interface to perform a walking action.
export class PersonService implements Animal {
  // Perform a walking action and return a description of the action.
  performAction(): string {
    return 'The person is walking.';
  }
}
