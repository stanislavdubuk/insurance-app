import * as React from 'react';
import { observer } from 'mobx-react';

import { Input } from '../Input';

import './Form.scss';

export const Form = observer(({ insuranceStore }) => {
  const { setInputValue } = insuranceStore;

  console.log(insuranceStore.dateOfBirth);

  return (
    <div className='form'>
      <h2>Введите параметры для подбора страховки</h2>
      <Input onChange={setInputValue} inputType='height' />
      <Input onChange={setInputValue} inputType='weight' />
      <Input onChange={setInputValue} inputType='gender' />
      <Input onChange={setInputValue} inputType='dateOfBirth' />
      <button className='button btn__calculate'>Рассчитать</button>
    </div>
  );
});
