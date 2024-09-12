import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'registro', loadChildren: () => import('./registro/registro.module').then(m => m.RegistroPageModule) },
  { path: 'bienvenida', loadChildren: () => import('./bienvenida/bienvenida.module').then(m => m.BienvenidaPageModule) },
  { path: 'tareas', loadChildren: () => import('./tareas/tareas.module').then(m => m.TareasPageModule) },
  { path: 'notas', loadChildren: () => import('./notas/notas.module').then(m => m.NotasPageModule) },
  { path: 'contactos', loadChildren: () => import('./contactos/contactos.module').then(m => m.ContactosPageModule) },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
