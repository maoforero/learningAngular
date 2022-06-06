import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PolicyRoutingModule } from './policy-routing.module';
import { PolicyPagesComponent } from './pages/policy-pages/policy-pages.component';


@NgModule({
  declarations: [
    PolicyPagesComponent
  ],
  imports: [
    CommonModule,
    PolicyRoutingModule
  ]
})
export class PolicyModule { }
