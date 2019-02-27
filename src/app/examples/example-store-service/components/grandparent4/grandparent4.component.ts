import { Component, OnInit } from '@angular/core';
import { RootStore } from 'src/app/core/store/service/root.store';
import { ExampleStore } from '../../store/example.store';

@Component({
  selector: 'app-grandparent4',
  templateUrl: './grandparent4.component.html',
  styleUrls: ['./grandparent4.component.css']
})
export class Grandparent4Component implements OnInit {
  constructor(private rootStore: RootStore, private componentStore: ExampleStore) { }

  ngOnInit(): void {
    console.log(`App ${this.rootStore.state.appVersion.name}, version: ${this.rootStore.state.appVersion.version}`);
  }
}
