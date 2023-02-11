import { validateField } from './validateField';

export function validateForm(validators, form) {
  const invalidInputs = {};

  Object.entries(form).forEach(([input, value]) => {
    const invalidInput = validateField(validators, input, value);
    if (input in invalidInput) {
      Object.assign(invalidInputs, invalidInput);
    }
  });
  return invalidInputs;
}
