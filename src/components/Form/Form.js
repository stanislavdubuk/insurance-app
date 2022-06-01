import * as React from 'react';
import { observer } from 'mobx-react';

import { Input } from '../Input';

import './Form.scss';

export const Form = observer(({ insuranceStore }) => {
  //   console.log(insuranceStore.heightInputValue);
  //   console.log(insuranceStore.weightInputValue);

  //   console.log(insuranceStore.genderInputValue);
  //   console.log(insuranceStore.dateOfBirth);

  return (
    <div className='form'>
      <h2>Введите параметры для подбора страховки</h2>
      <Input
        heightInputValue={insuranceStore.heightInputValue}
        onChange={insuranceStore.setInputValue}
        inputType='height'
      />
      <Input
        heightInputValue={insuranceStore.weightInputValue}
        onChange={insuranceStore.setInputValue}
        inputType='weight'
      />
      <Input
        heightInputValue={insuranceStore.genderInputValue}
        onChange={insuranceStore.setInputValue}
        inputType='gender'
      />
      <Input
        heightInputValue={insuranceStore.dateOfBirth}
        onChange={insuranceStore.setInputValue}
        inputType='dateOfBirth'
      />
      <button className='button btn__calculate'>Рассчитать</button>
    </div>
  );
});
