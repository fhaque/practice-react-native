/* @flow */
import * as React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

import { withFormik, Field } from 'formik';

const FormikTextInput = (props) => {
  const { onChangeText, name, ...otherProps } = props;
  return (
    <TextInput 
      onChangeText={(text: string) => props.onChangeText(props.name, text)}
      {...otherProps} 
    />
  );
};

const InnerForm = ({
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
    <Field render={() => <Button title="Submit" onPress={handleSubmit}/>} />
    {/* <Button title="Submit" onPress={handleSubmit} /> */}
  </View>
);

const FormContainer = withFormik({
  handleSubmit(values, formikBag) {
    console.log("Form Submit:", values, formikBag);
  }
})(InnerForm);

export const UserFormComponent = (): React.Node  => (
  <View>
    <Text>User Form</Text>
    <FormContainer />
  </View>
);