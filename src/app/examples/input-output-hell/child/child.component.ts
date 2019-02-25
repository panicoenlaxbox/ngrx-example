import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  counter = 0;

  @Output()
  counterChanged2 = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sum() {
    // this.counter++;
    this.counterChanged2.emit(this.counter + 1);
  }

  substract() {
    // this.counter--;
    this.counterChanged2.emit(this.counter - 1);
  }
}
