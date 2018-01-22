/* @flow */
import * as React from 'react';
import { View, Text, TextInput } from 'react-native';

// interface Input {
//   onChangeText: Function,
//   onBlur: Function,
//   onFocus: Function,
//   value: any,
// } 

// interface Meta {
//   active: boolean,

// }

interface Props {
  value: string,
  onChangeText: Function,
  onBlur: Function,
  onFocus: Function,
  dirty: boolean,
  touched: boolean,
  valid: boolean,
  visited: boolean,
  error: string,
  warning: string,
}

export const FormTextInputComponent = ({
  value = '',
  onChangeText,
  onBlur,
  onFocus,
  dirty = false,
  touched = false,
  valid = false,
  visited = false,
  error,
  warning,
}: Props): React.Node => {
  return (
    <View>
      <TextInput 
        onChangeText={onChangeText}
        onBlur={onBlur}
        onFocus={onFocus}
        value={value}
      />
      {touched && 
        <View>
          {error && <Text>{error}</Text>}
          {warning && <Text>{warning}</Text>}
        </View>
      }
    </View>
  );
}