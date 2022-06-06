import { action, makeObservable, observable } from 'mobx';

export class InsuranceStoreImpl {
  initialInsurancePlans = [];
  heightInputValue = null;
  weightInputValue = null;
  genderInputValue = 1;
  dateOfBirth = {};
  availableInsurancePlans = [];
  noPlansAvailableMessage = '';
  chosenPlan = {};
  chosenPlanDuration = 14;
  planStart = {};
  planEnd = {};
  totalInsurancePremium = 0;
  successMessageOptions = {
    open: false,
    vertical: 'top',
    horizontal: 'right',
  };

  constructor() {
    makeObservable(this, {
      initialInsurancePlans: observable,
      availableInsurancePlans: observable,
      heightInputValue: observable,
      weightInputValue: observable,
      genderInputValue: observable,
      dateOfBirth: observable,
      chosenPlan: observable,
      chosenPlanDuration: observable,
      planStart: observable,
      planEnd: observable,
      totalInsurancePremium: observable,
      noPlansAvailableMessage: observable,
      successMessageOptions: observable,
      setInitialPlans: action,
      setInputValue: action,
      setPlan: action,
      setPlanDuration: action,
      setTotalInsurancePremium: action,
      setAvailableInsurancePlans: action,
      setNoPlansAvailableMessage: action,
      setSuccessMessageOptions: action,
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

  setInitialPlans = (plans) => {
    this.initialInsurancePlans = plans;
  };

  setAvailableInsurancePlans = (plans) => {
    this.availableInsurancePlans = plans;
  };

  setNoPlansAvailableMessage = (message) => {
    this.noPlansAvailableMessage = message;
  };

  setSuccessMessageOptions = (isOpen) => {
    this.successMessageOptions = {
      ...this.successMessageOptions,
      open: isOpen,
    };
  };
}

export const InsuranceStore = new InsuranceStoreImpl();
