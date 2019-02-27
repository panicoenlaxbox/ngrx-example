import { Component, OnInit, OnDestroy } from '@angular/core';
import { CounterService } from '../../counter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit, OnDestroy {
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
