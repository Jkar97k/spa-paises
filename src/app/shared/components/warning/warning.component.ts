import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'shared-warning',
    templateUrl: './warning.component.html',
    styleUrls: ['./warning.component.css'],
    standalone: false
})
export class WarningComponent  {

  @Input()
  public message:string = '';
}
