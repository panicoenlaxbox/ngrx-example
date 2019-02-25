import { Component, OnInit, OnDestroy } from '@angular/core';
import { CounterService } from 'src/app/examples/input-output-with-service/counter.service';

@Component({
  selector: 'app-hero-date',
  templateUrl: './hero-date.component.html',
  styleUrls: ['./hero-date.component.scss']
})
export class HeroDateComponent implements OnInit, OnDestroy {

  constructor(private counterService: CounterService) { }

  ngOnInit() {
    console.log(this.counterService.getValue());
  }

  ngOnDestroy(): void {
  }

}
