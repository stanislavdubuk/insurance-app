import { action, makeObservable, observable } from 'mobx';

export class InsuranceStoreImpl {
  heightInputValue = '';
  weightInputValue = '';
  genderInputValue = 1;
  dateOfBirth = {};
  chosenPlan = {};
  chosenPlanDuration = 14;
  planStart = {};
  planEnd = {};
  totalInsurancePremium = null;

  constructor() {
    makeObservable(this, {
      heightInputValue: observable,
      weightInputValue: observable,
      genderInputValue: observable,
      dateOfBirth: observable,
      chosenPlan: observable,
      chosenPlanDuration: observable,
      planStart: observable,
      planEnd: observable,
      totalInsurancePremium: observable,
      setInputValue: action,
      setPlan: action,
      setPlanDuration: action,
      setTotalInsurancePremium: action,
    });
  }

  setInputValue = (value, inputType) => {
    if (inputType === 'height') this.heightInputValue = value;
    if (inputType === 'weight') this.weightInputValue = value;
    if (inputType === 'gender') this.genderInputValue = value;
    if (inputType === 'dateOfBirth') this.dateOfBirth = value;
    if (inputType === 'planStart') this.planStart = value;
    if (inputType === 'planEnd') this.planEnd = value;
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

  setTotalInsurancePremium = () => {
    this.totalInsurancePremium =
      this.chosenPlan.premium * this.chosenPlanDuration;
  };
}

export const InsuranceStore = new InsuranceStoreImpl();
