import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './register-page.module';
import { MetaTitle } from '~/components';
import pageData from './pageData.json';
import RegisterWrapper from './RegisterWrapper';
import { InputsWrapper } from '~/layouts';
import {
  Heading,
  Toggles,
  Loader,
  TextInput,
  FileInput,
  Success,
  RadioGroup,
  Checkbox,
} from '~/components';
import { Button } from '~/components/Actions';
import RegistrationFigure from '~/assets/svg/Figures/RegistrationFigure';
import { sendMail, validateField, validateForm } from '~/utils';
import { validators } from './validators';

const cn = classNames.bind(styles);

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [form, setForm] = useState({
    academy: 'full-stack',
    city: 'Kaunas',
    name: '',
    surname: '',
    email: '',
    resume: '',
    privacy: false,
  });

  const handleFormChange = (event) => {
    setForm({
      ...form,
      [event.name]: event.value,
    });
  };

  const handleInputBlur = (event) => {
    handleFormChange(event);
    const invalidInput = validateField(validators, event.name, event.value);
    if (event.name in invalidInput) {
      setFormErrors({ ...formErrors, ...invalidInput });
    } else {
      const newErrors = { ...formErrors };
      delete newErrors[event.name];
      setFormErrors(newErrors);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    const invalidFormInputs = validateForm(validators, form);

    if (Object.keys(invalidFormInputs).length === 0) {
      setLoading(true);
      const sendForm = {
        academy: form.academy[0].toUpperCase() + form.academy.slice(1),
        city: form.city[0].toUpperCase() + form.city.slice(1),
        name: form.name[0].toUpperCase() + form.name.slice(1),
        surname: form.surname[0].toUpperCase() + form.surname.slice(1),
        email: form.email,
        resume: form.resume.replace('fakepath', ''),
      };

      const sentStatus = sendMail(sendForm);
      sentStatus
        .then(() => setFormSent(true))
        .catch(() => setFormSent(false))
        .finally(() => setLoading(false));
    } else {
      setFormErrors(invalidFormInputs);
    }
  };

  return (
    <>
      <MetaTitle data={pageData.meta} />
      <RegisterWrapper>
        <div className={cn('container')}>
          <Heading tag="h1" style="big">
            Sourcery Academy Application
          </Heading>
          <div className={cn('content')}>
            {!formSent && !loading && (
              <form
                className={cn('application')}
                onSubmit={handleSubmit}
                noValidate
              >
                <Heading tag="h2" style="medium">
                  Academy information
                </Heading>
                <Toggles
                  required={pageData.toggleTitle.isRequired}
                  name="academy"
                  title={pageData.toggleTitle.name}
                  data={pageData.toggle}
                  selectedValue={form.academy}
                  onChange={handleFormChange}
                />

                <div className={cn('radio-wrapper')}>
                  <RadioGroup
                    selectedValue={form.city}
                    onChange={handleFormChange}
                    required
                    name="city"
                    options={pageData.radioOptions}
                  ></RadioGroup>
                </div>

                <Heading tag="h2" style="medium">
                  Personal information
                </Heading>

                <InputsWrapper>
                  {pageData.personalInfoForm.map((input) =>
                    input.type === 'file' ? (
                      <FileInput
                        accept={input.acceptFileTypes}
                        error={formErrors[input.id]}
                        id={input.id}
                        key={input.id}
                        name={input.id}
                        onChange={handleFormChange}
                        onBlur={handleInputBlur}
                        placeholder={input.placeholder}
                        required={input.isRequired}
                        title={input.title}
                        type={input.type}
                      />
                    ) : (
                      <TextInput
                        error={formErrors[input.id]}
                        id={input.id}
                        key={input.id}
                        name={input.id}
                        onChange={handleFormChange}
                        onBlur={handleInputBlur}
                        placeholder={input.placeholder}
                        required={input.isRequired}
                        title={input.title}
                        type={input.type}
                      />
                    )
                  )}
                </InputsWrapper>

                <div className={cn('privacy')}>
                  <Checkbox
                    label={pageData.checkboxInfo.label}
                    value={form.privacy}
                    onChange={handleFormChange}
                    required
                    name={pageData.checkboxInfo.name}
                    error={formErrors[pageData.checkboxInfo.name]}
                  />
                </div>

                {formSubmitted && Object.keys(formErrors).length > 0 && (
                  <p className={cn('error')}>
                    Please fill all required fields.
                  </p>
                )}

                <Button type="submit">Register</Button>
              </form>
            )}

            {loading && (
              <div className={cn('application')}>
                <Loader />
              </div>
            )}

            {!loading && formSent && (
              <Success
                heading={pageData.success.heading}
                message={pageData.success.message}
              />
            )}
            <RegistrationFigure className={cn('figure')} />
          </div>
        </div>
      </RegisterWrapper>
    </>
  );
}
