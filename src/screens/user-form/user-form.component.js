/* @flow */
import * as React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { compose, withProps } from 'recompose';
import { Field, reduxForm, reducer as reduxFormReducer } from 'redux-form';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import { RegistrationForm } from './form';

const rootReducer = combineReducers({ form: reduxFormReducer });

const store = createStore(rootReducer);

export const UserFormComponent = (): React.Node  => (
  <Provider store={store}>
    <View>
      <Text>Please register below.</Text>
      <RegistrationForm />
    </View>
  </Provider>
);