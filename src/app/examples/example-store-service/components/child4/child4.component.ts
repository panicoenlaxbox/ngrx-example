import { Component, OnInit } from '@angular/core';
import { ExampleStore } from '../../store/example.store';
import { RootStore } from 'src/app/core/store/service/root.store';

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
