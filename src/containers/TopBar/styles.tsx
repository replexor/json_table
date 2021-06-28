import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      minWidth: 800,
    },
    content: {
      flexGrow: 1,
      display: 'inline-flex',
      flexDirection: 'row',
      alignItems: 'center',

    },
    queryButton: {
      backgroundColor: '#ffffff',
      marginLeft: theme.spacing(1),
      '&:hover': {
        backgroundColor: '#E6E6E6',
      },
    },
    menuButton: {
      marginRight: theme.spacing(1),
    },
    title: {
      flexGrow: 1,
      display: 'block',
    },
    inputQuery: {
      flexGrow: 1,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      borderRadius: theme.shape.borderRadius,
      marginLeft: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      color: 'inherit',
      display: 'block'

    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: theme.spacing(2),
      width: 'auto',
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  }),
);