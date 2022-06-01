import React from 'react';

import './Input.scss';

export const Input = ({ inputType }) => {
  const getPlaceholderValue = () => {
    if (inputType === 'height') return 'Рост';
    if (inputType === 'weight') return 'Вес';
    if (inputType === 'gender') return 'Пол';
    if (inputType === 'dateOfBirth') return 'Дата рождения';
  };
  return (
    <div className='inputContainer'>
      <label className='inputLabel'>{getPlaceholderValue()}</label>
      <input placeholder={getPlaceholderValue()}></input>
    </div>
  );
};
