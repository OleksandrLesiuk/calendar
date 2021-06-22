import * as moment from 'moment';
import { CLOSE_POPUP, OPEN_POPUP, PopupActions } from './shared/popup.actions';
import { CHANGE_MONTH } from './shared/calendar.actions';

export interface State {
  isPopupOpened: boolean;
  date: moment.Moment;
}

const initialState: State = {
  isPopupOpened: true,
  date: moment(),
};

// export function appReducer(state = initialState, action: PopupActions) {
export function appReducer(state = initialState, action: any) {
  switch (action.type) {
    case OPEN_POPUP:
      return {
        ...state,
        isPopupOpened: true,
      };
    case CLOSE_POPUP:
      return {
        ...state,
        isPopupOpened: false,
      };
    case CHANGE_MONTH:
      const dir = action.payload.dir;
      const date = state.date.add(dir, 'month');
      return {
        ...state,
        date,
      };
    case 'CHANGE_DATE':
      const day = action.payload.day;
      const newDate = state.date.set({
        date: day.date(),
        month: day.month(),
      });
      return {
        ...state,
        date: newDate,
      };
    default:
      return state;
  }
}

// changeDate(date: moment.Moment) {
//   const value = this.date.value.set({
//     date: date.date(),
//     month: date.month(),
//   });
//   this.date.next(value);
// }

// changeMonth(dir: number) {
//   const value = this.date.value.add(dir, 'month');
//   this.date.next(value);
// }

// // export const getIsPopupOpened = (state: State) => state.isPopupOpened;
// export const getUiState = createFeatureSelector<State>('pupup');
// export const getIsPopupOpened = createSelector(
//   getUiState,
//   (state: State) => state.isPopupOpened
// );
