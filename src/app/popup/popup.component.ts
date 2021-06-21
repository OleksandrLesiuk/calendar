import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../app.reducer';
import * as popup from '../shared/popup.actions';
import * as moment from 'moment';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  date: moment.Moment = moment();

  constructor(private store: Store<{ ui: fromApp.State }>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.date = state.ui.date;
    });
  }

  close() {
    this.store.dispatch(new popup.ClosePopup());
  }
}
