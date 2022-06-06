import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseportRoutingModule } from './baseport-routing.module';
import { BaseportPagesComponent } from './pages/baseport-pages/baseport-pages.component';


@NgModule({
  declarations: [
    BaseportPagesComponent
  ],
  imports: [
    CommonModule,
    BaseportRoutingModule
  ]
})
export class BaseportModule { }
