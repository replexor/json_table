import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      width: 'auto',
      margin: 5,
      backgroundColor: theme.palette.background.default,
      outline: 'none',
      padding: '10px 10px',
    },
    cell: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box',
      padding: 5,
      minHeight: 40
    }
  }),
);