/* @flow */
import * as React from 'react';
import { View, Text } from 'react-native';
import { compose, mapProps } from 'recompose';

import { FormContainer, FormTextInputContainer, FormSubmitButtonContainer, FormTextInputComponent } from './components';

// TODO: find out why adding the validate prop causes depth exceeded error
const PhoneInput = compose(
  mapProps((ownerProps) => ({
    ...ownerProps,
    format: (value, name) => {
      const strVal = value ? value.toString() : '';
      return ( strVal.substr(0,3) + '-' + strVal.substr(3, 3) + '-' + strVal.substr(6) ).replace(/-+$/, "");
    },

    parse: (value, name) => { 
      return value ? Number(value.replace(/\D/g,'').substr(0,10)) : undefined;
    },
    validate:[ (value) => { 
      return (value && value.toString().length === 10) ? undefined : 'Need 10 digits'; 
    },],
    
    
  }))
)(FormTextInputContainer);

export const UserFormComponent = (): React.Node  => (
  <View>
    <FormContainer onSubmit={(values, dispatch, props) => console.log('Form Submit', values)}>
      <Text>User Form</Text>
      <FormTextInputContainer name="name"/>
      <FormTextInputContainer 
        name="phone"
        format={(value, name) => {
          const strVal = value ? value.toString() : '';
          return ( strVal.substr(0,3) + '-' + strVal.substr(3, 3) + '-' + strVal.substr(6) ).replace(/-+$/, "");
        }}
        parse={ (value, name) => value ? Number(value.replace(/\D/g,'').substr(0,10)) : undefined }
        validate={[(value) => (value && value.toString().length === 10) ? undefined : 'Need 10 digits']}
      />

      {/* <PhoneInput name="phone" /> */}
      <FormSubmitButtonContainer title="Submit" name="submit" />
    </FormContainer>
  </View>
);