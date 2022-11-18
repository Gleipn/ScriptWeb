import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, BrowserModule, AppRoutingModule],
  exports: [HeaderComponent, CommonModule, BrowserModule, AppRoutingModule],
})
export class SharedModule {}
