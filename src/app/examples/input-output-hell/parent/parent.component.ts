import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @Input()
  counter = 0;

  @Output()
  counterChanged = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sum() {
    // this.counter++;
    this.counterChanged.emit(this.counter + 1);
  }

  substract() {
    // this.counter--;
    this.counterChanged.emit(this.counter - 1);
  }

  onCounterChanged2(event: number) {
    // this.counter = event;
    // this.counterChanged.emit(this.counter);
    this.counterChanged.emit(event);
  }

}
