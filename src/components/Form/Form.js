import React from 'react';
import { Input } from '../Input';

import './Form.scss';

export const Form = ({ insuranceStore }) => {
  return (
    <div className='form'>
      <Input inputType='height' />
      <Input inputType='weight' />
      <Input inputType='gender' />
      <Input inputType='dateOfBirth' />
      <button className='button btnCalculate'>Рассчитать</button>
    </div>
  );
};
