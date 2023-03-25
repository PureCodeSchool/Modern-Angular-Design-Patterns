import { Component, OnInit } from '@angular/core';
import {UserService} from "../../models/services/user.service";

@Component({
  selector: 'app-user-registration',
  templateUrl: '../../views/user-registration/user-registration.component.html',
  styleUrls: ['../../views/user-registration/user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  userName: string = '';
  constructor(private userService: UserService) {}

  ngOnInit(): void {
  }

  // Register a new user using the createUser method from UserService.
  registerUser(name: string): void {
    const newUser = { id: Date.now(), name };
    this.userService.createUser(newUser);
  }

  // Handle form submission.
  onSubmit(form: any): void {
    this.registerUser(this.userName);
    form.reset();
  }
}
