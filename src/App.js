import * as React from 'react';

import { Form } from './components/Form';
import { Container } from './components/Container';
import { PlanCalculator } from './components/PlanCalculator/PlanCalculator';

import { InsuranceStore } from './store/InsuranceStore';

export const App = () => {
  return (
    <Container>
      <Form insuranceStore={InsuranceStore} />
      <PlanCalculator insuranceStore={InsuranceStore} />
    </Container>
  );
};
