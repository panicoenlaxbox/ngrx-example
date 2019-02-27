import { Component, OnInit, OnDestroy } from '@angular/core';
import { CounterService } from '../../counter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-grandparent2',
  templateUrl: './grandparent2.component.html',
  styleUrls: ['./grandparent2.component.css']
})
export class Grandparent2Component implements OnInit, OnDestroy {
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
