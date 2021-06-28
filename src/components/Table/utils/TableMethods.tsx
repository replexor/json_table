import Checkbox from '@material-ui/core/Checkbox';
import React from 'react';

import { STableRow, STableCell } from '@components/Table/utils/styles';
import { JsonDataType, JsonObjectType } from '@components/Table/utils/types';
import { TableCellEditable } from '@components/TableCellEditable/TableCellEditable';

export const convertValue = (value: JsonDataType): string => {
  const type = typeof(value);

  if (Array.isArray(value)) return '[array]';
  if (value === null) return '';
  if (type === 'object') return '[object]';
  if (type === 'boolean') return value ? 'Да' : 'Нет';

  return value.toString();
};

export const renderBodyLines = (data: JsonObjectType, page: number, rowsPerPage: number): Array<JSX.Element> =>
  data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: string, rowID: number) => {
    const cellsArray = Object.entries(row).reduce((cells: Array<JSX.Element>, [rowKey, value]) => {
      return [
        ...cells,
        <TableCellEditable
          key={`cell-${page}-${rowKey}`}
          data={data}
          rowID={page * rowsPerPage + rowID}
          rowKey={rowKey}
          cellText={convertValue(value)}
        />,
      ];
    }, []);

    return (
      <STableRow key={`row-${rowID}`}>
        <STableCell align="center" >
          <Checkbox color="default" />
        </STableCell>

        {cellsArray}
      </STableRow>
    );
  });

export const renderHeadLines = (data: Array<string>): JSX.Element => (
  <STableRow>
    <STableCell>
      <Checkbox color="default" />
    </STableCell>
    {data.map((title) => (
      <STableCell key={`cell-${title}`}>{title}</STableCell>
    ))}
  </STableRow>
);
