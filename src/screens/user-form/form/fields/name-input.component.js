// @flow
import { withProps, compose } from 'recompose';
import { Field } from 'redux-form';

import { DecoratedInput } from '../../../../components/DecoratedInput';

export const nameValidate = (value: string) => 
  (value && value.length > 0) ? undefined: 'Required.';

export const nameFormat = (value: string) => 
  value ? value.replace(/\b\w/g, l => l.toUpperCase()) : '';

export const nameParse = (value: string) => {
  console.log(value);
  return value ? value.replace(/\b\w/g, l => l.toUpperCase()).trim() : '';
}

export const nameWarn = (value: string) => {};

export const nameNormalize = (value: string, previousValue: string, allValues: object, previousAllValues: object) => value;


export const NameInput = compose(
  withProps(
    // TODO: fix type on ownerProps
    (ownerProps: any) => ({
      component: DecoratedInput,
      name: 'name',
      placeholder: 'Name',
      validate: nameValidate,
      format: nameFormat,
      parse: nameParse,
      warn: nameWarn,
      normalize: nameNormalize,
      ...ownerProps,
    })
  )
)(Field);