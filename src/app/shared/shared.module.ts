import { AboutPagesComponent } from './pages/about-pages/about-pages.component';
import { CommonModule } from '@angular/common';
import { ContactPagesComponent } from './pages/ContactPages/ContactPages.component';
import { HomePagesComponent } from './pages/homePages/homePages.component';
import { LoaderComponent } from './components/loader/loader.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchBoxComponent } from './components/searchBox/searchBox.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TableComponent } from './components/table/table.component';
import { WarningComponent } from './components/warning/warning.component';



@NgModule({
  declarations: [
    AboutPagesComponent,
    ContactPagesComponent,
    HomePagesComponent,
    LoaderComponent,
    SearchBoxComponent,
    SidebarComponent,
    TableComponent,
    WarningComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[
    SidebarComponent,
    SearchBoxComponent,
    TableComponent,
    WarningComponent,
    LoaderComponent,
  ]
})
export class SharedModule { }
