import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { observer } from 'mobx-react';

import './PlanList.scss';

export const PlanList = observer(({ insuranceStore }) => {
  const { setPlan, availableInsurancePlans, noPlansAvailableMessage } =
    insuranceStore;

  const handleChoosePlan = (plan) => {
    setPlan(plan);
  };

  if (noPlansAvailableMessage && !availableInsurancePlans.length) {
    return <div className='list__errorMessage'>{noPlansAvailableMessage}</div>;
  } else if (!availableInsurancePlans.length) {
    return null;
  }

  return (
    <div className='list'>
      <div className='list__header'>
        <div>Название полиса</div>
        <div>Страховая премия</div>
        <div>Страховое покрытие</div>
      </div>
      <ul>
        {availableInsurancePlans.map((plan, index) => {
          const checked = plan.id === insuranceStore.chosenPlan.id;

          return (
            <li className='plan' key={`PLAN_${plan.id}_${index}`}>
              <Checkbox
                checked={checked}
                onChange={() => handleChoosePlan(plan)}
                sx={{ color: '#eaeaea' }}
                className='plan__checkbox'
              />
              <span className='plan__title'>{plan.title}</span>
              <span className='plan__premium'>{plan.premium}</span>
              <span className='plan__sum'>{plan.sum}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
});
