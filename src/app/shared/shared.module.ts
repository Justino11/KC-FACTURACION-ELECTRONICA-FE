import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import * as fromComponents from './components';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  declarations: [],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    ...fromComponents.components
  ]
})
export class SharedModule { }
