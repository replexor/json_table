import { keys } from 'lodash';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DataTable from '@components/Table/DataTable';
import { TopBar } from '@containers/TopBar/TopBar';
import { setJsonTableVector, setJsonTableData, getAsyncData, AppThunkDispatch } from '@controllers/dataTable/actions';
import { getData } from '@controllers/dataTable/selectors';
import { normalizeJsonData, normalizeVector } from '@pages/Main/utils';

function Main(): React.ReactElement {
  const dispatch = useDispatch<AppThunkDispatch>();
  const json = useSelector(getData);

  const [isNormalized, setNormalized] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    const init = async () => {
      const data = await dispatch(getAsyncData());
      if (data) {
        const dataVector = normalizeVector(data);
        dispatch(setJsonTableVector(keys(dataVector)));
        const normalizeData = normalizeJsonData(data, dataVector);
        dispatch(setJsonTableData(normalizeData));
        setNormalized(true);
      }
    };

    init();
  }, []);

  return (
    <>
      {isNormalized && <TopBar json={json} isOpen={open} setOpen={setOpen} />}
      {isNormalized && <DataTable json={json} isOpen={open} />}
    </>
  );
}

export default Main;
