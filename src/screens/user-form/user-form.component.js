/* @flow */
import * as React from 'react';
import { View, Text } from 'react-native';

import { FormContainer, FormTextInputContainer } from './components'

export const UserFormComponent = (): React.Node  => (
  <View>
    <FormContainer>
      <Text>User Form</Text>
      <FormTextInputContainer name="name" />
    </FormContainer>
  </View>
);