/* @flow */
import * as React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { LocalForm } from 'react-redux-form';
import { Control } from 'react-redux-form/native';


class WrappedLocalForm extends React.Component {
  handleSubmit(values) {
    console.log("Form Submit: ", values);
  }
  handleUpdate(form) {
    console.log("Form Update: ", form);
  }
  handleChange(values) {
    console.log("Form Change: ", values);
  }

  render() {
    return (
      <LocalForm
      >
        {/* <Control.TextInput model="user.name" /> */}
      </LocalForm>
    );
  }
}

export const UserFormComponent = (): React.Node  => (
  <View>
    <Text>User Form</Text>
    <WrappedLocalForm />
  </View>
);