import { Component, OnInit } from '@angular/core';
import { RootStore } from 'src/app/core/store/service/root.store';
import { ExampleStore } from '../../store/example.store';

@Component({
  selector: 'app-parent4',
  templateUrl: './parent4.component.html',
  styleUrls: ['./parent4.component.css']
})
export class Parent4Component implements OnInit {

  constructor(private rootStore: RootStore, private componentStore: ExampleStore) { }

  ngOnInit() {
    console.log(`App ${this.rootStore.state.appVersion.name}, version: ${this.rootStore.state.appVersion.version}`);
  }
}
