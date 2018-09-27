import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';
import { ErrorsComponent } from './errors/errors.component';

@NgModule({
  imports: [
    CommonModule,
    MaterializeModule
  ],
  declarations: [ErrorsComponent],
  exports: [MaterializeModule, ErrorsComponent]
})
export class SharedModule { }
