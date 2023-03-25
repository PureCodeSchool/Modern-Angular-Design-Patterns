import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShapeAreaComponent } from './controllers/shape-area/shape-area.component';
import { AnimalActionsComponent } from './controllers/animal-actions/animal-actions.component';
import { UserRegistrationComponent } from './controllers/user-registration/user-registration.component';

const routes: Routes = [
  { path: 'shape-area', component: ShapeAreaComponent },
  { path: 'animal-actions', component: AnimalActionsComponent },
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: '', redirectTo: '/shape-area', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
