import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'shared-searchBox',
  templateUrl: './searchBox.component.html',
  styleUrls: ['./searchBox.component.css']
})
export class SearchBoxComponent implements OnInit,OnDestroy {

  private deboncer:Subject<string> = new Subject<string>();
  private deboncerSuscription?:Subscription;

  @Input()
  public placeholder:string = '';

  @Input()
  public inicialValue:string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  constructor() { }

  ngOnInit()
  {
    this.deboncerSuscription = this.deboncer
    .pipe(debounceTime(500))
    .subscribe(values => {this.emitValue(values)});
  }

  ngOnDestroy(): void {
    this.deboncerSuscription?.unsubscribe();
  }

  emitValue(value:string)
  {
    this.onValue.emit(value);
  }

  onKeypress(searchTerm:string)
  {
    this.deboncer.next(searchTerm);
  }
}
