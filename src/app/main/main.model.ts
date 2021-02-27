import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';


@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    MainRoutingModule
  ],
  providers: []
})
export class MainModule { }
