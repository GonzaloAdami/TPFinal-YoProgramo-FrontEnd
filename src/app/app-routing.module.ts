import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PortafolioComponent } from './portafolio/portafolio.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'portafolio', component: PortafolioComponent },
  { path: '#proyectosCarousel', redirectTo: 'portafolio', pathMatch: 'full' }, // Agrega esta línea
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
