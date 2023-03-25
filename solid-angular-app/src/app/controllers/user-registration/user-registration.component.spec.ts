import {ComponentFixture, TestBed} from '@angular/core/testing';
import {UserRegistrationComponent} from './user-registration.component';
import {UserService} from '../../models/services/user.service';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';

describe('UserRegistrationComponent', () => {
  let component: UserRegistrationComponent;
  let fixture: ComponentFixture<UserRegistrationComponent>;
  let userService: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserRegistrationComponent],
      imports: [FormsModule],
      providers: [UserService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistrationComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test that the registerUser method successfully creates a new user.
  it('should register a new user', () => {
    spyOn(userService, 'createUser');
    const userName = 'John Doe';
    component.registerUser(userName);
    expect(userService.createUser).toHaveBeenCalledWith({id: jasmine.any(Number), name: userName});
  });

  // Test that the onSubmit method calls registerUser and resets the form.
  it('should call registerUser and reset the form on submit', () => {
    spyOn(component, 'registerUser');
    const form = {
      reset: jasmine.createSpy('reset'),
    };
    component.userName = 'John Doe';
    component.onSubmit(form);
    expect(component.registerUser).toHaveBeenCalledWith('John Doe');
    expect(form.reset).toHaveBeenCalled();
  });

  // Test that the form submission triggers the onSubmit method.
  it('should trigger onSubmit when the form is submitted', () => {
    spyOn(component, 'onSubmit');
    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);
    expect(component.onSubmit).toHaveBeenCalled();
  });
});
