import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import * as fromApp from '../app.reducer';
import * as calendar from '../shared/calendar.actions';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss'],
})
export class SelectorComponent implements OnInit {
  date: moment.Moment = moment();

  constructor(private store: Store<{ ui: fromApp.State }>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.date = state.ui.date;
    });
  }

  go(dir: number) {
    this.store.dispatch(new calendar.ChangeMonth({ dir }));
  }
}
