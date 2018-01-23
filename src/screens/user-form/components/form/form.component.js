/* @flow */
import * as React from 'react';
import { View, Text } from 'react-native';

interface Props {
  handleSubmit: Function,
  valid: boolean,
  reset: Function,
  children?: React.Node,
}

export const FormComponent = ({
  handleSubmit = () => {},
  valid = false,
  reset = () => {},
  children
}: Props): React.Node =>
  <View>
    {React.Children.map(children, (child: React.Node) => {
      if (child.props.name === 'submit') {
        return React.cloneElement(child, { onSubmit: handleSubmit });
      } else {
        return child;
      }
    })}
  </View>