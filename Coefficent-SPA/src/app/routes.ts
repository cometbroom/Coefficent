import { Routes } from '@angular/router'
import { AuthGuard } from './_guards/auth.guard';
import {SuggestionsComponent} from './suggestions/suggestions.component';
import { BrowseComponent } from "./browse/browse.component";
import { GuideComponent } from "./guide/guide.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { ProfileComponent } from "./profile/profile.component";
import { StartComponent } from './start/start.component';
import { CreateProjectComponent } from "./create-project/create-project.component";

export const appRoutes: Routes = [
	{ path: '', component: 		StartComponent},
	{ path: 'createnew', component: CreateProjectComponent},
	{ path: 'suggestions', component: SuggestionsComponent},
	{ path: 'browse', component: 	BrowseComponent},
	{ path: 'guide', component: 	GuideComponent},
	{ path: 'about', component: AboutComponent},
	{ path: 'contact', component: ContactComponent},
	{
		path: '', 
		runGuardsAndResolvers: 'always',
		canActivate: [AuthGuard],
		children: [
			{ path: 'profile', component: 	ProfileComponent}
		]
	},
	{ path: '**', redirectTo: '', pathMatch: 'full'},
];
