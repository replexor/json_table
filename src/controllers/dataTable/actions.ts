import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

import { ControlsObjectType, JsonObjectType } from '@components/Table/utils/types';
import { ActionType } from '@controllers/dataTable/types';
import { State } from '@controllers/type';

export type AppThunkDispatch = ThunkDispatch<State, any, AnyAction>;
export type AppThunkAction<D> = ThunkAction<D, State, any, AnyAction>;

export const modifyData = (payload: JsonObjectType) => ({
  type: ActionType.EDIT_CELL,
  payload,
});

export const setJsonTableData = (payload: Array<JsonObjectType>) => ({
  type: ActionType.SET_JSON_TABLE_DATA,
  payload,
});

export const setJsonTableVector = (payload: Array<string>) => ({
  type: ActionType.SET_JSON_TABLE_VECTOR,
  payload,
});

export const setTableControlsState = (payload: ControlsObjectType) => ({
  type: ActionType.SET_CONTROLS_STATE,
  payload,
});

export const getAsyncData = (): AppThunkAction<Promise<Array<JsonObjectType> | undefined>> => async () => {
  try {
    const response = await fetch('http://localhost:4200/posts');
    let data = [];
    if (response.ok) {
      data = await response.json();
    }
    return data;
  } catch (err) {}
};
