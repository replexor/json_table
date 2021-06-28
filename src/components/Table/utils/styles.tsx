import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';

import { drawerWidth } from '@containers/TopBar/TopBar';

export const useStyles = makeStyles({
    table: {
      minWidth: 100,
    },
    container: {
      maxHeight: 700,
    },
    paperDrawer: {
      transitionProperty: 'margin',
      transitionDuration: '0.3s',
      marginRight: drawerWidth,
    },
  });
  
  export const STableRow = withStyles((theme: Theme) =>
    createStyles({
      root: {
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
      },
    })
  )(TableRow);
  
  export const STableCell = withStyles((theme: Theme) =>
    createStyles({
      head: {
        backgroundColor: '#CBC8D1',
        color: '#5D5B60',
        fontWeight: theme.typography.fontWeightBold,
        minWidth: 200,
        minHeight: 50,
        textAlign: 'center',
      },
      body: {
        fontSize: 14,
      },
    })
  )(TableCell);