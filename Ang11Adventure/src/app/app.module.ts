import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';

import { HomeComponent } from './home/home.component';

import { ListComponent } from './list/list.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, ListComponent],

  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule {}
