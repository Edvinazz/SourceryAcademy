export function validateField(validators, fieldName, value) {
  const fieldValidationErrors = {};
  const validator = validators[fieldName];

  if (!validator.validate(value)) {
    fieldValidationErrors[fieldName] = validator.errorMessage;
  }

  return fieldValidationErrors;
}
