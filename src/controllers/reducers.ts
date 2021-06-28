import { Reducer, combineReducers } from 'redux';

import { dataTable } from '@controllers/dataTable/reducer';
import { State } from '@controllers/type';

const reducers = combineReducers<State>({ dataTable });

export const rootReducer: Reducer<State> = (state: State | undefined, action) => reducers(state, action);