import { Component, OnInit, OnDestroy } from '@angular/core';
import { CounterService } from '../counter.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit, OnDestroy {
  counter$: Subscription;
  counter: number;

  constructor(private counterService: CounterService) { }

  ngOnInit() {
    this.counter$ = this.counterService.getCounter().subscribe((counter: number) => {
      this.counter = counter;
    });
  }

  add() {
    this.counterService.setCounter(this.counter + 1);
  }

  substract() {
    this.counterService.setCounter(this.counter - 1);
  }

  ngOnDestroy(): void {
    this.counter$.unsubscribe();
  }
}
