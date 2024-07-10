import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { emit } from 'process';
import { debounceTime, Subject, Subscription } from 'rxjs';


@Component({
  selector: 'shared-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy{



  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;
  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue:string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();


  emitValue(value: string):void{
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm:string){
    this.debouncer.next(searchTerm);
  }



  ngOnInit(): void {
   this.debouncerSuscription = this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(value => {
      this.onDebounce.emit(value);
    })
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();

}
}
