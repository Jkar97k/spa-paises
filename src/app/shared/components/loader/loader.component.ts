import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'shared-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.css'],
    standalone: false
})
export class LoaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
