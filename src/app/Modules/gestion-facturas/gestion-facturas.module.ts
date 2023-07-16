import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionarFacturasListaComponent } from './gestionar-facturas-lista/gestionar-facturas-lista.component';
import { GestionarFacturasDetallesComponent } from './gestionar-facturas-detalles/gestionar-facturas-detalles.component';
import { GestionfacturasRoutingModule } from './gestion-facturas-routing.module';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [
    GestionarFacturasListaComponent,
    GestionarFacturasDetallesComponent
  ],
  imports: [
    SharedModule,
    GestionfacturasRoutingModule
  ]
})
export class GestionFacturasModule { }
