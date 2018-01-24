// @flow
import * as React from 'react';
import { TextInput } from 'react-native';

export const InnerInput = ({style, placeholder, ...otherProps}): React.Node => (
  <TextInput 
    style={[...style]}
    placeholder={placeholder}
    {...otherProps}
  />
);