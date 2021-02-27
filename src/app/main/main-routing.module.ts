import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
        {
          path:"",
          component:DashboardComponent
        },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }