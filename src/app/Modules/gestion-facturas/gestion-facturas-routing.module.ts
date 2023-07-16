import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionarFacturasDetallesComponent } from './gestionar-facturas-detalles/gestionar-facturas-detalles.component';
import { GestionarFacturasListaComponent } from './gestionar-facturas-lista/gestionar-facturas-lista.component';



const routes: Routes = [
  {
    path: 'gestion-facturas',
    component: GestionarFacturasListaComponent
  },
  {
    path: 'gestion-facturas-detalles',
    component: GestionarFacturasDetallesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionfacturasRoutingModule { }