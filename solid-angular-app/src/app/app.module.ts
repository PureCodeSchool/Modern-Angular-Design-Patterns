import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ShapeAreaComponent} from "./controllers/shape-area/shape-area.component";
import {AnimalActionsComponent} from "./controllers/animal-actions/animal-actions.component";
import {UserRegistrationComponent} from "./controllers/user-registration/user-registration.component";
import {FormsModule} from "@angular/forms";
import {UserService} from "./models/services/user.service";

@NgModule({
  declarations: [
    AppComponent,
    ShapeAreaComponent,
    AnimalActionsComponent,
    UserRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
