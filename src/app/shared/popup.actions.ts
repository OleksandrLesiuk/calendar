import { Action } from '@ngrx/store';

export const OPEN_POPUP = 'OPEN_POPUP';
export const CLOSE_POPUP = 'CLOSE_POPUP';

export class OpenPopup implements Action {
  readonly type = OPEN_POPUP;
}

export class ClosePopup implements Action {
  readonly type = CLOSE_POPUP;
}

export type PopupActions = OpenPopup | ClosePopup;
