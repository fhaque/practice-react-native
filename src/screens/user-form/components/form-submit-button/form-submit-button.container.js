/* @flow */
import { compose, mapProps } from 'recompose';

import { FormSubmitButtonComponent } from './';

export const FormSubmitButtonContainer = compose(
  mapProps(
    (ownerProps) => {
      const {onSubmit, ...restProps} = ownerProps;
      const onPress = ownerProps.onSubmit;
      return {onPress, ...restProps};
    }
  )
)(FormSubmitButtonComponent);