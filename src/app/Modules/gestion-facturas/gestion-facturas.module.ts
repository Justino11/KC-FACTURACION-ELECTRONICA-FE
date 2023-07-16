import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionarFacturasListaComponent } from './gestionar-facturas-lista/gestionar-facturas-lista.component';
import { GestionarFacturasDetallesComponent } from './gestionar-facturas-detalles/gestionar-facturas-detalles.component';



@NgModule({
  declarations: [
    GestionarFacturasListaComponent,
    GestionarFacturasDetallesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GestionFacturasModule { }
