
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material-module.model';
import { LoginComponent } from './login.component';

const route=[
    {
      path:"",
      component:LoginComponent
    }
];
@NgModule({
  declarations: [
   LoginComponent
  ],
  imports: [
    RouterModule.forChild(route),
    MaterialModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class LoginModule { }
