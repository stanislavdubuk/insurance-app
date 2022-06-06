import * as React from 'react';
import { observer } from 'mobx-react';
import moment from 'moment';

import { Input } from '../Input';
import { calculateAvailablePlans } from '../../helprers';

import { INSURANCE_PLANS } from '../../constants';

import './Form.scss';

export const Form = observer(({ insuranceStore, today }) => {
  const {
    heightInputValue: userHeight,
    weightInputValue: userWeight,
    genderInputValue: userGender,
    dateOfBirth,
    chosenPlan,
    setPlan,
    availableInsurancePlans,
    noPlansAvailableMessage,
    setInputValue,
    initialInsurancePlans,
    setInitialPlans,
    setAvailableInsurancePlans,
    setNoPlansAvailableMessage,
  } = insuranceStore;

  const handleClick = () => {
    const dateOfBirthInYears = Math.abs(
      moment(dateOfBirth).diff(today, 'years')
    );

    const availablePlans = calculateAvailablePlans(
      initialInsurancePlans,
      userHeight,
      userWeight,
      dateOfBirthInYears
    );

    if (!availablePlans.length) {
      setNoPlansAvailableMessage(
        'По введенным данным не подобрано ни одного полиса. Пожалуйста, попробуйте ещё раз.'
      );
    }

    setAvailableInsurancePlans(availablePlans);
  };

  const handleChange = (value, inputType) => {
    if (availableInsurancePlans.length) setAvailableInsurancePlans([]);
    if (noPlansAvailableMessage.length) setNoPlansAvailableMessage('');
    if (chosenPlan.id) setPlan({});
    setInputValue(value, inputType);
  };

  React.useEffect(() => {
    setInitialPlans(INSURANCE_PLANS);
  }, [setInitialPlans]);

  React.useEffect(() => {
    setInputValue(today, 'dateOfBirth');
  }, [today, setInputValue]);

  return (
    <div className='form'>
      <h2>Введите параметры для подбора страховки</h2>
      <Input
        inputValue={userHeight}
        onChange={handleChange}
        inputType='height'
      />
      <Input
        inputValue={userWeight}
        onChange={handleChange}
        inputType='weight'
      />
      <Input
        inputValue={userGender}
        onChange={handleChange}
        inputType='gender'
      />
      <Input
        value={dateOfBirth}
        inputValue={dateOfBirth}
        onChange={handleChange}
        inputType='dateOfBirth'
      />
      <button onClick={() => handleClick()} className='button btn__calculate'>
        Рассчитать
      </button>
    </div>
  );
});
