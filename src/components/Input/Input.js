import * as React from 'react';
import { observer } from 'mobx-react';

import './Input.scss';

export const Input = observer(({ onChange, inputType }) => {
  const getPlaceholderValue = () => {
    if (inputType === 'height') return 'Рост';
    if (inputType === 'weight') return 'Вес';
    if (inputType === 'gender') return 'Пол';
    if (inputType === 'dateOfBirth') return 'Дата рождения';
  };

  const handleChange = (value) => {
    onChange(value, inputType);
  };

  return (
    <div className='input__container'>
      <label className='input__label'>{getPlaceholderValue()}</label>
      <input
        placeholder={getPlaceholderValue()}
        onChange={(e) => handleChange(e.target.value)}
      ></input>
    </div>
  );
});
