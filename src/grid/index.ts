import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormioModule } from '../';
import { FormioLoader } from '../formio.loader';
import { FormioAlerts } from '../formio.alerts';
import { FormioGridComponent } from './grid.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormioModule,
    PaginationModule.forRoot()
  ],
  declarations: [
    FormioGridComponent
  ],
  exports: [
    FormioGridComponent
  ],
  providers: [
    FormioLoader,
    FormioAlerts
  ]
})
export class FormioGridModule {}
export const FormioGrid = FormioGridModule;
