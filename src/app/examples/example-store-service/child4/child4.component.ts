import { Component, OnInit } from '@angular/core';
import { ExampleStore } from '../../component-store/example.store';
import { RootStore } from 'src/app/core/global-store/root.store';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.css']
})
export class Child4Component implements OnInit {

  constructor(private rootStore: RootStore, private componentStore: ExampleStore) { }

  ngOnInit() {
    console.log(`App ${this.rootStore.state.appVersion.name}, version: ${this.rootStore.state.appVersion.version}`);
  }

}
