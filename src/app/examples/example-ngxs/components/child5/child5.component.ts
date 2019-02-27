import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { DecrementCounter, IncrementCounter, ExampleState2 } from '../../store/example.state';
import { AppVersionState } from 'src/app/core/store/state/appversion.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-child5',
  templateUrl: './child5.component.html',
  styleUrls: ['./child5.component.css']
})
export class Child5Component implements OnInit {

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
