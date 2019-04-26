import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { OverlayMenuComponent } from './overlay-menu/overlay-menu.component';
import { TestListComponent } from './test-list/test-list.component';
import { BgLineComponent } from './bg-line/bg-line.component';
@NgModule({
  declarations: [AppComponent, OverlayMenuComponent, TestListComponent, BgLineComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
