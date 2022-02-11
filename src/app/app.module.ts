import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { EpisodiosListadoComponent } from './pages/episodios-listado/episodios-listado.component';
import { PersonajesListadoComponent } from './pages/personajes-listado/personajes-listado.component';
import { PersonajesDetalleComponent } from './pages/personajes-detalle/personajes-detalle.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EpisodiosListadoComponent,
    PersonajesListadoComponent,
    PersonajesDetalleComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      ...environment.auth,
    }),
    HttpClientModule,
    MatPaginatorModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
