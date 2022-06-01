import { action, makeObservable, observable } from 'mobx';

export class InsuranceStoreImpl {
  heightInputValue = '';
  weightInputValue = '';
  genderInputValue = null;
  dateOfBirth = '';
  chosenPlan = {};
  chosenPlanDuration = 14;

  constructor() {
    makeObservable(this, {
      heightInputValue: observable,
      weightInputValue: observable,
      genderInputValue: observable,
      dateOfBirth: observable,
      chosenPlan: observable,
      chosenPlanDuration: observable,
      setInputValue: action,
      setPlan: action,
      setPlanDuration: action,
    });
  }

  setInputValue = (value, inputType) => {
    if (inputType === 'height') this.heightInputValue = value;
    if (inputType === 'weight') this.weightInputValue = value;
    if (inputType === 'gender') this.genderInputValue = value;
    if (inputType === 'dateOfBirth') this.dateOfBirth = value;
  };

  setPlan = (plan) => {
    if (this.chosenPlan.id === plan.id) {
      this.chosenPlan = {};
      return;
    }
    this.chosenPlan = plan;
  };

  setPlanDuration = (duration) => {
    this.chosenPlanDuration = duration;
  };
}

export const InsuranceStore = new InsuranceStoreImpl();
