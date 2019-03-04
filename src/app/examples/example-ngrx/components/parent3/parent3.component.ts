import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { ExamplesFeatureState, getCounterState } from '../../store/reducers';
import { Store } from '@ngrx/store';
import * as fromCounter from '../../store/actions/counter.actions';
import { CounterState } from '../../store/reducers/counter.reducer';
import { AppVersionState } from 'src/app/core/store/reducers/app.reducer';
import { getAppVersionState, getAppVersionId } from 'src/app/core/store/reducers';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  styleUrls: ['./parent3.component.css']
})
export class Parent3Component implements OnInit, OnDestroy {
  counter$: Subscription;
  counter: number;
  appVersionId$: Observable<number>;

  constructor(private store: Store<ExamplesFeatureState>) { }

  ngOnInit() {
    this.counter$ = this.store.select(getCounterState).subscribe((counter: CounterState) => {
      this.counter = counter.value;
    });

    this.appVersionId$ = this.store.select(getAppVersionId);
  }

  add() {
    this.store.dispatch(new fromCounter.IncrementCounterAction(this.counter + 1));
  }

  substract() {
    this.store.dispatch(new fromCounter.DecrementCounterAction(this.counter - 1));
  }

  ngOnDestroy(): void {
    this.counter$.unsubscribe();
  }
}
