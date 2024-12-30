import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css'],
    standalone: false
})
export class SidebarComponent implements OnInit {

  sidebarItem = [
    // {
    //   route: 'home',
    //   title:'Home page'
    // },
    // {
    //   route: 'about',
    //   title:'about page'
    // },
    // {
    //   route: 'contact',
    //   title:'contact page'
    // },
    {
      route: 'countries/by-capital',
      title:'Por capital'
    },
    {
      route: 'countries/by-country',
      title:'Por pais'
    },
    {
      route: 'countries/by-region',
      title:'Por region'
    },
    // {
    //   route: 'countries/by-capital',
    //   title:'individual'
    // },
  ];
  constructor() { }

  ngOnInit() {
  }

}
