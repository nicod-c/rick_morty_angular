import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { EpisodiosListadoComponent } from './pages/episodios-listado/episodios-listado.component';
import { HomeComponent } from './pages/home/home.component';
import { PersonajesDetalleComponent } from './pages/personajes-detalle/personajes-detalle.component';
import { PersonajesListadoComponent } from './pages/personajes-listado/personajes-listado.component';

const routes: Routes = [
  { path: '',
  redirectTo: 'home',
  pathMatch: 'full' },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'episode',
    component: EpisodiosListadoComponent,
    canActivate : [AuthGuard]
  },
  {
    path:'personajes',
    component: PersonajesListadoComponent,
    canActivate : [AuthGuard]
  },
  {
    path:'personajes/:id',
    component: PersonajesDetalleComponent,
    canActivate : [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
