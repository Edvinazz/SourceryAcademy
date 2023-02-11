export const validators = {
  academy: {
    validate: (value) => value.length > 0,
    errorMessage: 'must be selected',
  },
  city: {
    validate: (value) => value.length > 0,
    errorMessage: 'must be selected',
  },
  name: {
    validate: (value) => value.length >= 2,
    errorMessage: 'is too short',
  },
  surname: {
    validate: (value) => value.length >= 2,
    errorMessage: 'is too short',
  },
  email: {
    validate: (value) => value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),
    errorMessage: 'format is invalid',
  },
  resume: {
    validate: (value) => value.length > 0,
    errorMessage: 'must be attached',
  },
  privacy: {
    validate: (value) => value,
    errorMessage: 'Field is required',
  },
};
