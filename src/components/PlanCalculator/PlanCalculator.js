import * as React from 'react';
import { observer } from 'mobx-react';
import moment from 'moment';

import Checkbox from '@mui/material/Checkbox';
import { RangeSlider } from '../RangeSlider';
import { Input } from '../Input';

import { INSURANCE_PLANS } from '../../constants';

import './PlanCalculator.scss';

export const PlanCalculator = observer(({ insuranceStore, today }) => {
  const {
    setPlan,
    setInputValue,
    planStart,
    planEnd,
    chosenPlan,
    chosenPlanDuration,
    totalInsurancePremium,
    setTotalInsurancePremium,
  } = insuranceStore;

  const handleChoosePlan = (plan) => {
    setPlan(plan);
  };

  React.useEffect(() => {
    setInputValue(today, 'planStart');
  }, [today, setInputValue]);

  React.useEffect(() => {
    const calculatedPlanEnd = moment(planStart).add(
      chosenPlanDuration,
      'month'
    );

    setInputValue(calculatedPlanEnd, 'planEnd');
  }, [planStart, chosenPlanDuration, setInputValue]);

  React.useEffect(() => {
    setTotalInsurancePremium();
  }, [chosenPlan, setTotalInsurancePremium, chosenPlanDuration]);

  return (
    <div className='calculator'>
      <div className='calculator__header'>
        <div>Название полиса</div>
        <div>Страховая премия</div>
        <div>Страховое покрытие</div>
      </div>
      <ul>
        {INSURANCE_PLANS.map((plan, index) => {
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
      {Boolean(insuranceStore.chosenPlan.risks) && (
        <div className='risks'>
          <span>Риски</span>
          <ul>
            {insuranceStore.chosenPlan.risks.map((risk, riskIndex) => {
              return <li key={`RISK_${riskIndex}`}>{risk}</li>;
            })}
          </ul>
        </div>
      )}
      <RangeSlider insuranceStore={insuranceStore} />
      <div className='plan__duration'>
        <Input
          value={planStart}
          onChange={setInputValue}
          inputType='planStart'
        />
        <Input value={planEnd} inputType='planEnd' />
      </div>

      <div className='plan__summary'>
        <span>Полная страховая премия</span>
        <span>{totalInsurancePremium}</span>
        <button className='button'>Оформить полис</button>
      </div>
    </div>
  );
});
