import { InputAdornment, OutlinedInput } from '@material-ui/core';
import debounce from 'lodash/debounce';
import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { STableCell } from '@components/Table/utils/styles';
import { InputType, JsonObjectType } from '@components/Table/utils/types';
import { getValue } from '@components/Table/utils/usefulls';
import { DeleteButton } from '@components/TableCellEditable/DeleteButton';
import { useStyles } from '@components/TableCellEditable/styles';
import { modifyData } from '@controllers/dataTable/actions';

export const TableCellEditable: React.FC<{
  data: JsonObjectType;
  cellText: InputType;
  rowID: number;
  rowKey: string;
}> = ({ data, cellText, rowID, rowKey }) => {

  const classes = useStyles();
  const dispatch = useDispatch();

  const [isEditable, setEditCell] = React.useState(false);
  const [inputText, setInputText] = React.useState(cellText);

  useEffect(() => {
    setInputText(cellText);
  }, [cellText]);

  const handleDoubleClickMenu = () => {
    setEditCell(!isEditable);
  };

  const saveInput = useCallback(
    debounce((value) => {
      data[rowID][rowKey] = value;
      dispatch(modifyData(data));
    }, 300),
    [data],
  );

  const handleChangeInput = (selectedInputValue: InputType) => {
    setInputText(selectedInputValue);
    saveInput(selectedInputValue);
  };

  return (
    <STableCell>
      <OutlinedInput className={classes.input}
        multiline
        onDoubleClick={handleDoubleClickMenu}
        value={inputText}
        disabled={!isEditable}
        onChange={(e) => handleChangeInput(getValue(e))}
        endAdornment={(
          <InputAdornment position="end">
            {
              inputText && (
              <DeleteButton 
                isEditable={isEditable} 
                data={data} 
                rowID={rowID} 
                rowKey={rowKey} 
              />
            )}
          </InputAdornment>
        )}
      />
    </STableCell>
  );
};
