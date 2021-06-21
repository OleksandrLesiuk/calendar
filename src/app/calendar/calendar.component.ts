import { Store } from '@ngrx/store';
// import { DateService } from './../shared/date.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import * as fromApp from '../app.reducer';
import * as popup from '../shared/popup.actions';
import * as calendar from '../shared/calendar.actions';

interface Day {
  value: moment.Moment;
  active: boolean;
  disabled: boolean;
  selected: boolean;
}

interface Week {
  days: Day[];
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  calendar: Week[] = [];

  constructor(private store: Store<{ ui: fromApp.State }>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.generate.call(this, state.ui.date);
    });
  }

  generate(now: moment.Moment) {
    const startDay = now.clone().startOf('month').startOf('week');
    const endDay = now.clone().endOf('month').endOf('week');

    const date = startDay.clone().subtract(1, 'day');
    // const date = startDay.clone();

    const calendar = [];

    while (date.isBefore(endDay, 'day')) {
      calendar.push({
        days: Array(7)
          .fill(0)
          .map(() => {
            // const value = date.add(1, 'day').locale('ru').clone();
            const value = date.add(1, 'day').clone();
            const active = moment().isSame(value, 'date');
            const disabled = !now.isSame(value, 'month');
            const selected = now.isSame(value, 'date');

            return {
              value,
              active,
              disabled,
              selected,
            };
          }),
      });
    }

    this.calendar = calendar;
  }

  select(day: moment.Moment) {
    // this.store.dispatch({ type: 'CHANGE_DATE', payload: { day } });
    this.store.dispatch(new calendar.ChangeDate({ day }));

    this.store.dispatch(new popup.OpenPopup());
  }
}
