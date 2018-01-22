/* @flow */
import * as React from 'react';
import { View, Text } from 'react-native';

interface Props {
  onSubmit: Function,
  valid: boolean,
  reset: Function,
  children?: React.Node,
}

export const FormComponent = ({
  onSubmit = () => {},
  valid = false,
  reset = () => {},
  children
}: Props): React.Node =>
  <View>
    {children}
  </View>