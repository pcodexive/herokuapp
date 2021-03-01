import { NgModule } from '@angular/core';

// import {
//   MatCardModule,
//   MatInputModule,
//   MatButtonModule
// } from '@angular/material';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

const modules = [
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
