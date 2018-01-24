// @flow
import * as React from 'react';
import { View, Button } from 'react-native';

import { NameInput } from './fields';

export const RegistrationFormComponent = ({
  handleSubmit = () => {},
  valid = false,
  reset = () => {},
}) => (
  <View>
    <NameInput name="firstname" />
    <NameInput name="lastname " />
    <Button title="Submit" onPress={ (val) => {handleSubmit(); reset()}  } />
  </View>
);