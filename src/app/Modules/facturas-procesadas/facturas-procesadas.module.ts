import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoralFacturasProcesadasComponent } from './historal-facturas-procesadas/historal-facturas-procesadas.component';
import { HistoralFacturasProcesadasDetallesComponent } from './historal-facturas-procesadas-detalles/historal-facturas-procesadas-detalles.component';
import { SharedModule } from '@shared/shared.module';
import { FacturasProcesadasRoutingModule } from './facturas-procesadas-routing.module';



@NgModule({
  declarations: [
    HistoralFacturasProcesadasComponent,
    HistoralFacturasProcesadasDetallesComponent
  ],
  imports: [
    SharedModule,
    FacturasProcesadasRoutingModule
  ]
})
export class FacturasProcesadasModule { }
