import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { FotografiaModule } from './fotografia/fotografia.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  //Declaration é só para componente
  declarations: [AppComponent],
  //Imports é só para modulo
  imports: [FotografiaModule, SharedModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
