import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExamplesFeatureState, getCounterState } from '../../store/reducers';
import { Store } from '@ngrx/store';
import * as fromCounter from '../../store/actions/counter.actions';
import { CounterState } from '../../store/reducers/counter.reducer';
import { AppVersionState } from 'src/app/core/reducers/app.reducer';
import { getAppVersionState } from 'src/app/core/reducers';

@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  styleUrls: ['./parent3.component.css']
})
export class Parent3Component implements OnInit, OnDestroy {
  counter$: Subscription;
  counter: number;

  constructor(private store: Store<ExamplesFeatureState>) { }

  ngOnInit() {
    this.counter$ = this.store.select(getCounterState).subscribe((counter: CounterState) => {
      this.counter = counter.value;
    });
    
    // TODO Hacer selector? => Usar selector del reducer asociado a la parte del estado que quieres leer
    this.store.select(getAppVersionState).subscribe((appVersion: AppVersionState) => {
      console.log(appVersion.id, appVersion.name);
    });
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
