import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home/home.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FotoComponent } from './foto/foto.component';

@NgModule({
  //Determina quais componentes são responsabilidade do modulo
  declarations: [FotoComponent, HomeComponent, FormularioComponent],
  imports: [BrowserModule],
  //Permite que outros modulos ou componentes acessem estre grupo
  exports: [FotoComponent, HomeComponent, FormularioComponent],
})
export class FotografiaModule {}
