/* @flow */
import * as React from 'react';
import { compose, withProps, renderComponent } from 'recompose';
import { Field } from 'redux-form';
import { FormTextInputComponent } from './';

interface WrappedFormTextInputProps {
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

const WrappedFormTextInput = (props): React.Node => {
  const {
    input: { value, onBlur, onChange, onFocus },
    meta: { dirty, touched, valid, visited, error, warning },
  } = props;

  const newProps = {
    value,
    onBlur,
    onChangeText: onChange,
    onFocus,
    dirty,
    touched,
    valid,
    visited,
    error,
    warning
  }

  return (
    <FormTextInputComponent {...newProps}/>
  );
}

export const FormTextInputContainer = compose(
  // TODO: add type for ownerProps
  withProps((ownerProps) => ({
    ...ownerProps,
    component: WrappedFormTextInput,
  }))
)(Field);

