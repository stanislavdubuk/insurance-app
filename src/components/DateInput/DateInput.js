import React from 'react';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import TextField from '@mui/material/TextField';

import './DateInput.scss';

export const DateInput = ({
  onChange,
  inputType,
  disabled,
  value,
  disablePast,
  disableFuture,
}) => {
  const handleDateChange = (value) => {
    onChange(value, inputType);
  };

  return (
    <div className='date__picker'>
      <LocalizationProvider locale='ru' dateAdapter={AdapterMoment}>
        <DesktopDatePicker
          disabled={disabled}
          disablePast={disablePast}
          disableFuture={disableFuture}
          inputFormat='DD/MM/YYYY'
          value={value}
          onChange={handleDateChange}
          renderInput={(params) => (
            <TextField size='small' fullWidth {...params} />
          )}
        />
      </LocalizationProvider>
    </div>
  );
};
