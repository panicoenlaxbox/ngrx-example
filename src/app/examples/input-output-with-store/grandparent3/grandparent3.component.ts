import { Component, OnInit, OnDestroy } from '@angular/core';
import { ExamplesFeatureState, getCounterState } from '../../store/reducers';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { CounterState } from '../../store/reducers/counter.reducer';
import { IncrementCounterAction, DecrementCounterAction } from '../../store/actions/counter.actions';

@Component({
  selector: 'app-grandparent3',
  templateUrl: './grandparent3.component.html',
  styleUrls: ['./grandparent3.component.css']
})
export class Grandparent3Component implements OnInit, OnDestroy {
  counter$: Subscription;
  counter: number;

  constructor(private store: Store<ExamplesFeatureState>) { }

  ngOnInit() {
    this.counter$ = this.store.select(getCounterState).subscribe((counter: CounterState) => {
      this.counter = counter.value;
    });
  }

  sum() {
    this.store.dispatch(new IncrementCounterAction(this.counter + 1));
  }

  substract() {
    this.store.dispatch(new DecrementCounterAction(this.counter - 1));
  }

  ngOnDestroy(): void {
    this.counter$.unsubscribe();
  }
}
