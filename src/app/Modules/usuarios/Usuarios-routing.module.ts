import { components } from './../../shared/components/index';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { NotificacionesUsuariosComponent } from './notificaciones-usuarios/notificaciones-usuarios.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { PerfilUsuariosComponent } from './perfil-usuarios/perfil-usuarios.component';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { ResetUsuarioComponent } from './reset-usuario/reset-usuario.component';

const routes: Routes = [
    {
        path:'listado-usuarios',
        component: ListadoUsuariosComponent
    },
    {
        path:'notificaciones',
        component: NotificacionesUsuariosComponent
    },
    {
        path:'nuevo-usuario',
        component: NuevoUsuarioComponent
    },
    {
        path:'perfil-usuario',
        component: PerfilUsuariosComponent
    },
    {
        path:'cambiar-contraseña',
        component: ResetUsuarioComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class UsuariosRoutingModule { }