import * as React from 'react';
import { observer } from 'mobx-react';

import { Input } from '../Input';

import './Form.scss';

export const Form = observer(({ insuranceStore, today }) => {
  const {
    heightInputValue: userHeight,
    weightInputValue: userWeight,
    genderInputValue: userGender,
    dateOfBirth,
    setInputValue,
  } = insuranceStore;

  React.useEffect(() => {
    setInputValue(today, 'dateOfBirth');
  }, [today, setInputValue]);

  return (
    <div className='form'>
      <h2>Введите параметры для подбора страховки</h2>
      <Input
        inputValue={userHeight}
        onChange={setInputValue}
        inputType='height'
      />
      <Input
        inputValue={userWeight}
        onChange={setInputValue}
        inputType='weight'
      />
      <Input
        inputValue={userGender}
        onChange={setInputValue}
        inputType='gender'
      />
      <Input
        value={dateOfBirth}
        inputValue={dateOfBirth}
        onChange={setInputValue}
        inputType='dateOfBirth'
      />
      <button className='button btn__calculate'>Рассчитать</button>
    </div>
  );
});
