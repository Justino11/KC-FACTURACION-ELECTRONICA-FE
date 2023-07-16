import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoralFacturasProcesadasComponent } from './historal-facturas-procesadas/historal-facturas-procesadas.component';
import { HistoralFacturasProcesadasDetallesComponent } from './historal-facturas-procesadas-detalles/historal-facturas-procesadas-detalles.component';



@NgModule({
  declarations: [
    HistoralFacturasProcesadasComponent,
    HistoralFacturasProcesadasDetallesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FacturasProcesadasModule { }
