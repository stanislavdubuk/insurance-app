import { action, makeObservable, observable } from 'mobx';

export class InsuranceStoreImpl {
  insuranceOptions = ['option 1', 'option 2', 'option 3'];
  heightInputValue = '';
  weightInputValue = '';
  genderInputValue = null;
  dateOfBirth = '';

  constructor() {
    makeObservable(this, {
      insuranceOptions: observable,
      inputValue: action,
    });
  }

  inputValue(value, inputType) {
    if (inputType === 'height') this.heightInputValue = value;
    if (inputType === 'weight') this.weightInputValue = value;
    if (inputType === 'gender') this.genderInputValue = value;
    if (inputType === 'dateOfBirth') this.dateOfBirthInputValue = value;
  }
}

export const InsuranceStore = new InsuranceStoreImpl();
