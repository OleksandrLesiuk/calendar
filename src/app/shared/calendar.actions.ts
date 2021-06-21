import { Action } from '@ngrx/store';
import * as moment from 'moment';

export const CHANGE_MONTH = 'CHANGE_MONTH';
export const CHANGE_DATE = 'CHANGE_DATE';

export class ChangeMonth implements Action {
  readonly type = CHANGE_MONTH;

  constructor(public payload: { dir: number }) {}
}

export class ChangeDate implements Action {
  readonly type = CHANGE_DATE;

  constructor(public payload: { day: moment.Moment }) {}
}

export type PopupActions = ChangeMonth | ChangeDate;
