import { Component, OnInit } from '@angular/core';
import { AppVersionState } from 'src/app/core/store/state/appversion.state';
import { Observable } from 'rxjs';
import { Store, Select } from '@ngxs/store';
import { IncrementCounter, DecrementCounter, ExampleState2 } from '../../store/example.state';

@Component({
  selector: 'app-parent5',
  templateUrl: './parent5.component.html',
  styleUrls: ['./parent5.component.css']
})
export class Parent5Component implements OnInit {

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
