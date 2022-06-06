import * as React from 'react';
import { observer } from 'mobx-react';
import { Alert, Snackbar } from '@mui/material';
import moment from 'moment';

import { RangeSlider } from '../RangeSlider';
import { Input } from '../Input';

import './PlanCalculator.scss';

export const PlanCalculator = observer(({ insuranceStore, today }) => {
  const {
    setInputValue,
    planStart,
    planEnd,
    chosenPlan,
    chosenPlanDuration,
    totalInsurancePremium,
    setTotalInsurancePremium,
    successMessageOptions,
    setSuccessMessageOptions,
  } = insuranceStore;

  const { vertical, horizontal, open } = successMessageOptions;

  const handleClick = (isOpen) => {
    setSuccessMessageOptions(isOpen);
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

  if (!chosenPlan.id) return null;

  return (
    <div className='calculator'>
      {Boolean(insuranceStore.chosenPlan.risks) && (
        <div className='calculator__risks'>
          <span>Риски</span>
          <ul>
            {insuranceStore.chosenPlan.risks.map((risk, riskIndex) => {
              return <li key={`RISK_${riskIndex}`}>{risk}</li>;
            })}
          </ul>
        </div>
      )}
      <RangeSlider insuranceStore={insuranceStore} />
      <div className='calculator__duration'>
        <Input
          value={planStart}
          onChange={setInputValue}
          inputType='planStart'
        />
        <Input value={planEnd} inputType='planEnd' />
      </div>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={() => handleClick(false)}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert severity='success' sx={{ width: '100%' }}>
          Вы оформили страховой полис "{chosenPlan.title}"
        </Alert>
      </Snackbar>

      <div className='calculator__summary'>
        <span>Полная страховая премия</span>
        {totalInsurancePremium && <span>{totalInsurancePremium}</span>}
        <button className='button' onClick={() => handleClick(true)}>
          Оформить полис
        </button>
      </div>
    </div>
  );
});
