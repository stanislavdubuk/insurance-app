import { toJS } from 'mobx';

export const calculateAvailablePlans = (
  initialPlans,
  height,
  weight,
  dateOfBirth
) => {
  const calculatedBodyMassIndex = weight / ((height / 100) * (height / 100));

  const availablePlans = toJS(initialPlans).filter(
    (plan) =>
      plan.minBodyMassIndex <= calculatedBodyMassIndex &&
      plan.maxBodyMassIndex > calculatedBodyMassIndex &&
      dateOfBirth >= plan.minAge &&
      dateOfBirth <= plan.maxAge
  );

  return availablePlans;
};
