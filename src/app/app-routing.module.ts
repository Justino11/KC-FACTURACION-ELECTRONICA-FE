import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from '@layout/skeleton/skeleton.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/panel/inicio',
    pathMatch: 'full'
  },
  {
    path:'panel',
    component: SkeletonComponent,
    children: [
      {
        path: 'inicio',
        loadChildren: () =>
        import('@modules/inicio/inicio.module').then((m) => m.InicioModule)
      },
      {
        

      }
    ]
  },
  {
    path: '**',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }