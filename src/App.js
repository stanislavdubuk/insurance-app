import * as React from 'react';
import moment from 'moment';

import { Container } from './components/Container';
import { Form } from './components/Form';
import { PlanList } from './components/PlanList';
import { PlanCalculator } from './components/PlanCalculator';

import { InsuranceStore } from './store/InsuranceStore';

export const App = () => {
  const today = moment().clone().format('YYYY-MM-DD');

  return (
    <Container>
      <Form today={today} insuranceStore={InsuranceStore} />
      <PlanList insuranceStore={InsuranceStore} />
      <PlanCalculator today={today} insuranceStore={InsuranceStore} />
    </Container>
  );
};
