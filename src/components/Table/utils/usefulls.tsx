import React from 'react';

import { InputType } from '@components/Table/utils/types';

export const getValue = (e: React.SyntheticEvent): InputType => {
    const target = e.target as HTMLInputElement;
  
    return +target.value || target.value;
};