import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { renderHeadLines, renderBodyLines } from '@components/Table/utils/TableMethods';
import { useStyles } from '@components/Table/utils/styles';
import { JsonObjectType } from '@components/Table/utils/types';
import { getVector } from '@controllers/dataTable/selectors';

const DataTable: React.FC<{json: Array<JsonObjectType>, isOpen: boolean}> = ({json, isOpen}) => {
  const dispatch = useDispatch();
  const vector = useSelector(getVector);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [tableData, setTableData] = React.useState<Array<JsonObjectType>>([]);

  useEffect(() => {
    setTableData(json);
  }, [dispatch, json]);

  const classes = useStyles();

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={isOpen ? classes.paperDrawer : ''}>
      <TableContainer className={classes.container}>
        <Table className={classes.table} size="small" aria-label="sticky table" stickyHeader>
          <TableHead>{renderHeadLines(vector)}</TableHead>
          <TableBody>{renderBodyLines(tableData, page, rowsPerPage)}</TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={tableData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default DataTable;
