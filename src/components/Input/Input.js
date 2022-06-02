import * as React from 'react';
import { observer } from 'mobx-react';
import { InputAdornment, OutlinedInput } from '@mui/material';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

import moment from 'moment';
import 'moment/locale/ru';

import './Input.scss';
// import { DateInput } from '../DateInput/DateInput';

export const Input = observer(({ onChange, inputType }) => {
  const heightType = inputType === 'height';
  const weightType = inputType === 'weight';
  const genderType = inputType === 'gender';
  const dateOfBirthType = inputType === 'dateOfBirth';
  const planStartType = inputType === 'planStart';
  const planEndType = inputType === 'planEnd';

  const getPlaceholderValue = () => {
    if (heightType) return 'Рост';
    if (weightType) return 'Вес';
    if (genderType) return 'Пол';
    if (dateOfBirthType) return 'Дата рождения';
    if (planStartType) return 'Дата начала';
    if (planEndType) return 'Дата окончания';
  };

  const handleChange = (value) => {
    onChange(value, inputType);
  };

  const handleDateChange = (value) => {
    const formattedDate = moment(value).format('DD/MM/YYYY');

    onChange(formattedDate, inputType);
  };

  const today = moment().clone().format('YYYY-MM-DD');

  return (
    <div className='input__container'>
      <label className='input__label'>{getPlaceholderValue()}</label>
      {['height', 'weight'].includes(inputType) && (
        <OutlinedInput
          sx={{ width: '200px' }}
          size='small'
          placeholder={getPlaceholderValue()}
          onChange={(e) => handleChange(e.target.value)}
          endAdornment={
            <InputAdornment position='end'>
              {heightType ? 'см' : 'кг'}
            </InputAdornment>
          }
        />
      )}
      {inputType === 'gender' && (
        <Select
          sx={{
            width: '200px',
            height: '100%',
            fontSize: '10px',
          }}
          size='small'
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          onChange={(e) => handleChange(e.target.value)}
        >
          <MenuItem value={1}>Мужской</MenuItem>
          <MenuItem value={2}>Женский</MenuItem>
        </Select>
      )}
      {inputType === 'dateOfBirth' && (
        <div className='date__picker'>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DesktopDatePicker
              disableFuture
              inputFormat='DD/MM/YYYY'
              value={today}
              onChange={handleDateChange}
              renderInput={(params) => (
                <TextField size='small' fullWidth {...params} />
              )}
            />
          </LocalizationProvider>
        </div>
      )}
      {inputType === 'planStart' && (
        <OutlinedInput
          sx={{ width: '150px' }}
          size='small'
          placeholder={getPlaceholderValue()}
          onChange={(e) => handleChange(e.target.value)}
        />
      )}
      {inputType === 'planEnd' && (
        <OutlinedInput
          sx={{ width: '150px' }}
          size='small'
          placeholder={getPlaceholderValue()}
          onChange={(e) => handleChange(e.target.value)}
        />
      )}
    </div>
  );
});
