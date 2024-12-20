import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent  {

  @Input()
  public message:string = '';
}
