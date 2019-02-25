import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { CrmFeatureState, getCustomersState } from 'src/app/crm/store/reducers';
import { Subscription } from 'rxjs';
import { } from 'rxjs/operators';
import { Customer } from 'src/app/crm/store/models/customer.model';
import { CustomersState } from 'src/app/crm/store/reducers/customer.reducer';
import { CounterService } from 'src/app/examples/input-output-with-service/counter.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

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
