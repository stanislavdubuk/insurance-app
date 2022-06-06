import * as React from 'react';
import { observer } from 'mobx-react';
import { InputAdornment, OutlinedInput } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import { DateInput } from '../DateInput/DateInput';

import './Input.scss';

export const Input = observer(({ inputValue, onChange, inputType, value }) => {
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

  return (
    <div className='input__container'>
      <label className='input__label'>{getPlaceholderValue()}</label>
      {['height', 'weight'].includes(inputType) && (
        <OutlinedInput
          sx={{ width: '200px' }}
          size='small'
          type='number'
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
          value={inputValue}
        >
          <MenuItem value={1}>Мужской</MenuItem>
          <MenuItem value={2}>Женский</MenuItem>
        </Select>
      )}
      {inputType === 'dateOfBirth' && (
        <DateInput
          value={value}
          onChange={onChange}
          inputType={inputType}
          disableFuture
        />
      )}
      {inputType === 'planStart' && (
        <DateInput
          value={value}
          disablePast
          onChange={onChange}
          inputType={inputType}
        />
      )}
      {inputType === 'planEnd' && (
        <DateInput
          value={value}
          onChange={onChange}
          inputType={inputType}
          disabled
        />
      )}
    </div>
  );
});
