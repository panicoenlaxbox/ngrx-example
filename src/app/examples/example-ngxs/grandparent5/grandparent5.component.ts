import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { AppVersionState } from 'src/app/core/state/appversion.state';
import { Observable } from 'rxjs';
import { IncrementCounter, DecrementCounter, ExampleState2 } from '../../state/example.state';

@Component({
  selector: 'app-grandparent5',
  templateUrl: './grandparent5.component.html',
  styleUrls: ['./grandparent5.component.css']
})
export class Grandparent5Component implements OnInit {

  constructor(private store: Store) { }

  @Select(AppVersionState.getAppVersionNumber) versionNumber$: Observable<number>;
  @Select(ExampleState2.getCounter) counter$: Observable<number>;

  ngOnInit() {
    console.log(`App ${this.store.select(state => state.appVersion.name)}, version: ${this.versionNumber$}`);
  }

  add() {
    this.store.dispatch(new IncrementCounter());
  }

  substract() {
    this.store.dispatch(new DecrementCounter());
  }
}
