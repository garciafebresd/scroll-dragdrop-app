import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';

//Components
import { DragComponent } from './components/drag/drag.component';
import { PaisesComponent } from './components/paises/paises.component';
import { VirtualComponent } from './components/virtual/virtual.component';

@NgModule({
  declarations: [
    AppComponent,
    DragComponent,
    PaisesComponent,
    VirtualComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ScrollingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
