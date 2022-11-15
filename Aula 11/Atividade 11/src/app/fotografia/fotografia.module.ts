import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FotoComponent } from './foto/foto.component';

@NgModule({
  //Determina quais componentes são responsabilidade do modulo
  declarations: [FotoComponent, HomeComponent, FormularioComponent],
  imports: [
    BrowserModule,
    FormsModule, //Modulo do ngForm, ngModel, ngSubmit (template driven)
    ReactiveFormsModule, //Modulo do formgroup, formbuilder (data driven)
  ],
  //Permite que outros modulos ou componentes acessem estre grupo
  exports: [FotoComponent, HomeComponent, FormularioComponent],
})
export class FotografiaModule {}
