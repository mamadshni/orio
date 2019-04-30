import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverlayMenuComponent } from './overlay-menu/overlay-menu.component';
import { TestListComponent } from './test-list/test-list.component';
import { BgLineComponent } from './bg-line/bg-line.component';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { OverlaySliderDirective } from './directives/overlay-slider.directive';
@NgModule({
  declarations: [
    AppComponent,
    OverlayMenuComponent,
    TestListComponent,
    BgLineComponent,
    HeroSectionComponent,
    OverlaySliderDirective
  ],
  imports: [BrowserModule, AppRoutingModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
