import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grandparent',
  templateUrl: './grandparent.component.html',
  styleUrls: ['./grandparent.component.css']
})
export class GrandparentComponent implements OnInit {

  counter = 0;

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.counter++;
  }

  substract() {
    this.counter--;
  }

  onCounterChanged(event: number) {
    console.log('parent has changed counter');
    this.counter = event;
  }

}
