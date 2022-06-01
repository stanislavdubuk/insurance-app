import * as React from 'react';

import { Form } from './components/Form';
import { Container } from './components/Container';

import { InsuranceStore } from './store/InsuranceStore';

export const App = () => {
  return (
    <Container>
      <h2>Введите параметры для подбора страховки</h2>
      <Form insuranceStore={InsuranceStore} />
    </Container>
  );
};
