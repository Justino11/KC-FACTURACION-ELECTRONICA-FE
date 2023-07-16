import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { NotificacionesUsuariosComponent } from './notificaciones-usuarios/notificaciones-usuarios.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { PerfilUsuariosComponent } from './perfil-usuarios/perfil-usuarios.component';
import { UsuariosRoutingModule } from './Usuarios-routing.module';
import { ResetUsuarioComponent } from './reset-usuario/reset-usuario.component';



@NgModule({
  declarations: [
    ListadoUsuariosComponent,
    NotificacionesUsuariosComponent,
    NuevoUsuarioComponent,
    PerfilUsuariosComponent,
    ResetUsuarioComponent,
  ],
  imports: [
    SharedModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
