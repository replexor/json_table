import { ControlsObjectType, JsonObjectType} from '@components/Table/utils/types';

export enum ActionType {
  EDIT_CELL = 'EDIT_CELL',
  SET_JSON_TABLE_DATA = 'SET_JSON_TABLE_DATA',
  SET_JSON_TABLE_VECTOR = 'SET_JSON_TABLE_VECTOR',
  SET_CONTROLS_STATE = 'SET_CONTROLS_STATE',
  SET_JSON = 'SET_JSON',
}

export type DataTableState = {
  json: Array<JsonObjectType>,
  vector: Array<string>,
  controlsSettings: ControlsObjectType
}