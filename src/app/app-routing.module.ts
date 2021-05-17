import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HotelInicioComponent } from './components/hotel-inicio/hotel-inicio.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { ReservacionComponent } from './components/reservacion/reservacion.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'', redirectTo:'home', pathMatch: 'full'},
  {path:'not-found',component:NotFoundComponent},
  {path:'HotelInicio', component: HotelInicioComponent},
  {path:'login',component:LoginComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'reservacion',component:ReservacionComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
