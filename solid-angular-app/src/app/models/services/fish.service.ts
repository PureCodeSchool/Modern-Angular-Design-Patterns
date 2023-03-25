import { Animal } from '../interfaces/animal.interface';

// Fish class implements the Animal interface to perform a swimming action.
export class FishService implements Animal {
  // Perform a swimming action and return a description of the action.
  performAction(): string {
    return 'The fish is swimming.';
  }
}
