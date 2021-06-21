import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from './app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isPopupOpened: boolean = false;

  constructor(private store: Store<{ ui: fromApp.State }>) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    // this.isPopupOpened$ = this.store.map((state) => state.ui.isPopupOpened);
    this.store.subscribe((state) => {
      this.isPopupOpened = state.ui.isPopupOpened;
    });
  }
}
