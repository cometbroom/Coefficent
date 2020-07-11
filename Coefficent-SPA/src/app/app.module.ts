import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectcardComponent } from './projectcard/projectcard.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroComponent } from './hero/hero.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FiltersComponent } from './filters/filters.component';
import { ProjectsbrowserComponent } from './projectsbrowser/projectsbrowser.component';

@NgModule({
   declarations: [
      AppComponent,
      ProjectcardComponent,
      HeroComponent,
      NavbarComponent,
      FiltersComponent,
      ProjectsbrowserComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
