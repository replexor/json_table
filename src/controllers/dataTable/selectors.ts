import { createSelector } from 'reselect';

import { State } from '@controllers/type';

export const dataTableState = ({ dataTable }: State) => dataTable;

export const getData = createSelector(dataTableState, ({ json }) => json);
export const getVector = createSelector(dataTableState, ({ vector }) => vector);
export const getControls = createSelector(dataTableState, ({ controlsSettings }) => controlsSettings);
