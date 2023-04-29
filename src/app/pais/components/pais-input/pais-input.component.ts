import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
})
export class PaisInputComponent implements OnInit, OnDestroy{

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = "";

  private debouncer: Subject<string> = new Subject();
  private debouncerSubscription?: Subscription;

  termino: string = "";

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
    .pipe(debounceTime(500))
    .subscribe(valor => {
      this.onDebounce.emit(valor);
    });
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  buscar(){
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(){
    this.debouncer.next(this.termino);
  }
}
