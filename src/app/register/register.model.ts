
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material-module.model';
import { RegisterComponent } from './register.component';

const route=[
    {
      path:"",
      component:RegisterComponent
    }
];
@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    RouterModule.forChild(route),
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class RegisterModule { }
