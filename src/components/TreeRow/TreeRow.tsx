import { Input, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { green } from '@material-ui/core/colors';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import EditIcon from '@material-ui/icons/Edit';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { InputType, JsonObjectType } from '@components/Table/utils/types';
import { getValue } from '@components/Table/utils/usefulls';
import { modifyData } from '@controllers/dataTable/actions';

const useStyles = makeStyles({
  li: {
    margin: 0,
    outline: 0,
    padding: 0,
    marginLeft: '2px',
    listStyle: 'none',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
  },
  label: {
    width: '100%',
    position: 'relative',
    paddingLeft: '4px',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    padding: '2px',
    justifyContent: 'space-between',
  },
  span: {
    color: '#36c',
  },
  iconButton: {
    padding: '1px',
    fontSize: 20,
  },
});

type TreeControlType = {
  [key: string]: {
    type: string;
    defaultEditableValue?: boolean;
  };
};

type TreeControlsType = {
  editable: TreeControlType;
  hover: TreeControlType;
};

const buttons: TreeControlsType = {
  editable: {
    firstControl: {
      type: 'CheckIcon',
      defaultEditableValue: false,
    },
    secondControl: {
      type: 'ClearIcon',
      defaultEditableValue: false,
    },
  },
  hover: {
    firstControl: {
      type: 'EditIcon',
      defaultEditableValue: true,
    },
    secondControl: {
      type: 'HighlightOffIcon',
    },
  },
};

const getIconElement = (str: string) => {
  switch (str) {
    case 'ClearIcon':
      return <ClearIcon color="secondary" style={{ fontSize: 20 }} />;
    case 'CheckIcon':
      return <CheckIcon style={{ fontSize: 20, color: green[500] }} />;
    case 'EditIcon':
      return <EditIcon color="action" style={{ fontSize: 20 }} />;
    case 'HighlightOffIcon':
      return <HighlightOffIcon color="action" style={{ fontSize: 20 }} />;
    default:
      break;
  }
};

export const TreeRow: React.FC<{
  data: JsonObjectType;
  rowID: number;
  rowKey: string;
  rowValue: InputType;
}> = ({ data, rowID, rowKey, rowValue }) => {
  const classes = useStyles();

  const [isHovered, setHovered] = React.useState(false);
  const [value, setValue] = React.useState(rowValue);
  const [inputText, setInputText] = React.useState<InputType>(rowValue);
  const [isEditable, setEditable] = React.useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setValue(rowValue);
  }, [rowValue]);

  const deleteValue = () => {
    data[rowID][rowKey] = null;
    dispatch(modifyData(data));
  };

  const handleChangeInput = (newVal: InputType) => {
    setInputText(newVal);
  };

  const saveNewValue = () => {
    data[rowID][rowKey] = inputText;
    dispatch(modifyData(data));
  };

  const renderButtons = () =>
    Object.entries(isEditable ? buttons.editable : isHovered && buttons.hover).reduce(
      (btnArr: Array<JSX.Element>, [key, info]) => {
        return [
          ...btnArr,
          <IconButton
            key={key}
            className={classes.iconButton}
            onClick={
              info.defaultEditableValue !== undefined
                ? // todo: можно ли сделать проще?
                  () => {
                    info.type === 'CheckIcon' && saveNewValue();
                    setEditable(info.defaultEditableValue);
                  }
                : deleteValue
            }
          >
            {getIconElement(info.type)}
          </IconButton>,
        ];
      },
      [],
    );

  // todo: отображение null
  return (
    <li className={classes.li} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className={classes.content}>
        {isEditable ? (
          <Input defaultValue={value} autoFocus onChange={(e) => handleChangeInput(getValue(e))} />
        ) : (
          <Typography variant="body1">
            <span className={classes.span}>{`${rowKey}: `}</span>
            {value}
          </Typography>
        )}

        <div>{renderButtons()}</div>
      </div>
    </li>
  );
};
