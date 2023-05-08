import { LOCALE_ID } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LylyNiceComponent } from './lyly-nice/lyly-nice.component';

import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { LylyListComponent } from './lyly-list/lyly-list.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing-module';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { SingleLylyfaceComponent } from './single-lylyface/single-lylyface.component';


@NgModule({
  declarations: [
    AppComponent,
    LylyNiceComponent,
    LylyListComponent,
    HeaderComponent,
    LandingpageComponent,
    SingleLylyfaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    registerLocaleData(fr.default);
  }
}
