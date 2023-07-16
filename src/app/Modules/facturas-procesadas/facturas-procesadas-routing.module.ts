import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoralFacturasProcesadasComponent } from './historal-facturas-procesadas/historal-facturas-procesadas.component';
import { HistoralFacturasProcesadasDetallesComponent } from './historal-facturas-procesadas-detalles/historal-facturas-procesadas-detalles.component';




const routes: Routes = [
  {
    path: 'historial-facturas-procesadas',
    component: HistoralFacturasProcesadasComponent
  },
  {
    path: 'detalles-facturas-procesadas',
    component: HistoralFacturasProcesadasDetallesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacturasProcesadasRoutingModule { }