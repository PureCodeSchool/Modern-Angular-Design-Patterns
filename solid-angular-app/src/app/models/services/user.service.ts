interface User {
  id: number;
  name: string;
}

// UserService class is responsible for managing user data.
export class UserService {
  private users: User[] = [];

  // Create a new user and add it to the list of users.
  createUser(user: User): void {
    this.users.push(user);
  }

  // Retrieve a user by its ID.
  getUser(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }
}
