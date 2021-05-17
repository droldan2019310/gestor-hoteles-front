import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FontAwesomeModule } from '@fortawesome/fontawesome-free';
import { ImgFooterComponent } from './components/img-footer/img-footer.component';
import { FooterComponent } from './components/footer/footer.component';
import { HotelInicioComponent } from './components/hotel-inicio/hotel-inicio.component';
import { HabitacionesComponent } from './components/habitaciones/habitaciones.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { FormsModule } from '@angular/forms';

import {BrowserAnimationsModule  } from "@angular/platform-browser/animations";
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReservacionComponent } from './components/reservacion/reservacion.component';
import { MiCuentaComponent } from './components/mi-cuenta/mi-cuenta.component';
import { ReservacionesComponent } from './components/mi-cuenta/reservaciones/reservaciones.component';
import { EditarCuentaComponent } from './components/mi-cuenta/editar-cuenta/editar-cuenta.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    CarouselComponent,
    ImgFooterComponent,
    FooterComponent,
    HotelInicioComponent,
    HabitacionesComponent,
    EventosComponent,
    ServiciosComponent,
    LoginComponent,
    RegisterComponent,
    ReservacionComponent,
    MiCuentaComponent,
    ReservacionesComponent,
    EditarCuentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
