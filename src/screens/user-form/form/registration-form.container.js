// @flow
import { reduxForm } from 'redux-form';

import { RegistrationFormComponent } from './inner-registration-form.component';

export const RegistrationForm = reduxForm({
  form: 'registration',
  onSubmit: (val) => console.log('Form Submitted', val),
})(RegistrationFormComponent);