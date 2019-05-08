import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverlayMenuComponent } from './overlay-menu/overlay-menu.component';
import { BgLineComponent } from './bg-line/bg-line.component';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ScrollSlideDirective } from './directives/scroll-slide.directive';
@NgModule({
  declarations: [
    AppComponent,
    OverlayMenuComponent,
    BgLineComponent,
    HeroSectionComponent,
    MainPageComponent,
    ScrollSlideDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
