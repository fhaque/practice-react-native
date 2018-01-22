/* @flow */
import * as React from 'react';
import { compose, withReducer } from 'recompose';
import { reduxForm, reducer as reduxFormReducer } from 'redux-form';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import { FormComponent } from './';

const rootReducer = combineReducers({ form: reduxFormReducer });

const store = createStore(rootReducer);



// const WrappedForm = compose(
//   withReducer(
//     'form',
//     'formAction',
//     reducer,
//   ),
// )(FormComponent);

const WrappedReduxForm = reduxForm({
  form: 'form',
})(FormComponent);

export const FormContainer = (props: any) =>
  <Provider store={store}>
    <WrappedReduxForm {...props} />
  </Provider>