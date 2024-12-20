import { Component, Input } from '@angular/core';
import { Country } from '../../../countries/interfaces/country';

@Component({
  selector: 'shared-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent  {

  @Input()
  public header:string[] = [];

  @Input()
  public capitals:Country[] = [];

  @Input()
  public countries:Country[] = [];

  @Input()
  public region:Country[] = [];

}
