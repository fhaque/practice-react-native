/* @flow */
import * as React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { withProps, compose } from 'recompose';

import { withFormik, Field, Formik } from 'formik';

const FormikTextInput = (props) => {
  const { onChangeText, name, ...otherProps } = props;
  return (
    <TextInput 
      onChangeText={(text: string) => props.onChangeText(props.name, text)}
      {...otherProps} 
    />
  );
};

let InnerForm = ({
  values,
  errors,
  touched,
  handleChanged,
  handleBlur,
  handleSubmit,
  isSubmitting,
  setFieldValue,
}) => (
  <View>
    <FormikTextInput 
      name="username"
      onChangeText={setFieldValue}
    />
    <Field name="email" render={(renderProps) => {console.log("Field Props", renderProps); return <TextInput />} } />
    {/* <Field render={() => <But
    ton title="Submit" onPress={handleSubmit}/>} /> */}
    <Button title="Submit" onPress={handleSubmit} />
  </View>
);


const FormContainer = withFormik({
  handleSubmit(values, formikBag) {
    console.log("Form Submit:", values, formikBag);
  }
})(InnerForm);

export class UserFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this._form = undefined;
  }
  render() {
    return (
      <View>
        <Text>User Form</Text>
        <FormContainer ref={c => { console.log('ref', c); this._form = c; } } />
        <Button title="print to console" onPress={() => console.log('ref',this._form)} />
      </View>
    );
  }
}