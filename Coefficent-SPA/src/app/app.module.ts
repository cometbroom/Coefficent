import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { ProjectcardComponent } from './projectcard/projectcard.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroComponent } from './hero/hero.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FiltersComponent } from './filters/filters.component';
import { ProjectsbrowserComponent } from './projectsbrowser/projectsbrowser.component';
import { LoginComponent } from './login/login.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { BrowseComponent } from './browse/browse.component';
import { GuideComponent } from './guide/guide.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { appRoutes } from './routes';
import { HomeComponent } from './home/home.component';
import { UserService } from './_services/user.service';
import { StartComponent } from './start/start.component';

@NgModule({
   declarations: [
      AppComponent,
      ProjectcardComponent,
      HeroComponent,
      NavbarComponent,
      FiltersComponent,
      ProjectsbrowserComponent,
      LoginComponent,
      CreateProjectComponent,
      SuggestionsComponent,
      BrowseComponent,
      GuideComponent,
      AboutComponent,
      ContactComponent,
      ProfileComponent,
      HomeComponent,
      StartComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      UserService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
