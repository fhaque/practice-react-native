// @flow
import * as React from 'react';
import { Text, View } from 'react-native';
import { InnerInput } from './../InnerInput';

export const DecoratedInput = ({
  labelStyle = [],
  inputStyle = [],
  warningStyle = [],
  errorStyle = [],
  label = '',
  placeholder = '',
  input: { value = '', onBlur = () => {}, onChange = () => {}, onFocus = () => {} },
  meta: { dirty=false, touched=false, valid=false, visited=false, error, warning }
}) => {
  const inputProps = {
    value,
    onEndEditing: onBlur, // as per: https://github.com/erikras/redux-form/issues/2951
    onChangeText: onChange,
    onFocus,
    dirty,
    touched,
    valid,
    visited,
    error,
    warning,
    placeholder,
  }

  return (
    <View>
      <Text style={[...labelStyle]}>{label}</Text>
      <InnerInput 
        style={[...inputStyle]} 
        {...inputProps}
      />
      {touched && 
        <View>
          {error && <Text style={[...errorStyle]}>{error}</Text>}
          {warning && <Text style={[...warningStyle]}>{warning}</Text>}
        </View>
      }
    </View>
  );
};