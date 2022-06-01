import React from 'react';
import { observer } from 'mobx-react-lite';

import Slider from '@mui/material/Slider';

import './RangeSlider.scss';

export const RangeSlider = observer(({ insuranceStore }) => {
  const { chosenPlanDuration, setPlanDuration } = insuranceStore;

  const handleChange = (value) => {
    setPlanDuration(value);
  };

  const getMonthName = () => {
    if (chosenPlanDuration === 21) return 'месяц';
    if ([22, 23, 24].includes(chosenPlanDuration)) return 'месяца';
    return 'месяцев';
  };

  return (
    <div className='slider'>
      <Slider
        onChange={(e) => handleChange(e.target.value)}
        value={chosenPlanDuration}
        valueLabelDisplay='auto'
        step={1}
        min={12}
        max={24}
        sx={{ color: '#c080fd' }}
      />

      <div className='slider__counter'>
        Полис длительностью {chosenPlanDuration} {getMonthName()}
      </div>
    </div>
  );
});
