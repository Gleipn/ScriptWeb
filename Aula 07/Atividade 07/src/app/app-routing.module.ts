import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormularioComponent } from './fotografia/formulario/formulario.component';
import { FotoComponent } from './fotografia/foto/foto.component';
import { HomeComponent } from './fotografia/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'fotos', component: FotoComponent },
  { path: 'formulario', component: FormularioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
