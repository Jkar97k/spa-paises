import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagesComponent } from './shared/pages/homePages/homePages.component';
import { AboutPagesComponent } from './shared/pages/about-pages/about-pages.component';
import { ContactPagesComponent } from './shared/pages/ContactPages/ContactPages.component';

const routes: Routes = [
  {
    path:'home',
    component: HomePagesComponent
  },
  {
    path:'about',
    component: AboutPagesComponent
  },
  {
    path:'contact',
    component: ContactPagesComponent
  },
  {
    path:'countries',
    loadChildren: () => import('./countries/countries.module').then( m => m.CountriesModule),
  },
  {
    path:'**',
    redirectTo:'countries'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
