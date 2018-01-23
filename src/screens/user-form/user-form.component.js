/* @flow */
import * as React from 'react';
import { View, Text } from 'react-native';

import { FormContainer, FormTextInputContainer, FormSubmitButtonContainer } from './components';

export const UserFormComponent = (): React.Node  => (
  <View>
    <FormContainer onSubmit={(values) => console.log('Form Submit:', values)}>
      <Text>User Form</Text>
      <FormTextInputContainer name="name" />
      <FormSubmitButtonContainer title="Submit" name="submit" />
    </FormContainer>
  </View>
);