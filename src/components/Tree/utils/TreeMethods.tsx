import { TreeItem } from '@material-ui/lab';
import React from 'react';

import { convertValue } from '@components/Table/utils/TableMethods';
import { JsonObjectType } from '@components/Table/utils/types';
import { TreeRow } from '@components/TreeRow/TreeRow';

export const renderTree = (data: JsonObjectType): Array<JSX.Element> =>
  data.map((row: string, rowID: number) => {
    const cellsArray = Object.entries(row).reduce((cells: Array<JSX.Element>, [rowKey, value]) => {
      // todo: вложенности
      return [
        ...cells,
        <TreeRow
          key={`row-${rowKey}`}
          data={data}
          rowID={rowID}
          rowKey={rowKey}
          rowValue={convertValue(value)}
        />
      ];
    }, []);

    return (
      <TreeItem key={`tree-${rowID.toString()}`} nodeId={rowID.toString()} label={rowID}>
        {cellsArray}
      </TreeItem>
    );
  });
