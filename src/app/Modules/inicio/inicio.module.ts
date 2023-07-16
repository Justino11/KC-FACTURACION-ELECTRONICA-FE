import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InicioRoutingModule } from './inicio-routing.module';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    SharedModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
