/* @flow */
import * as React from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, Button } from 'react-native';
import { LocalForm } from 'react-redux-form';
import { Control } from 'react-redux-form/native';


const ConnectedButton = connect()(Button);

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
        model="user"
        onUpdate={(form) => this.handleUpdate(form)}
        onChange={(values) => this.handleChange(values)}
        onSubmit={(values) => this.handleSubmit(values)}
      >
        <Control.TextInput model="user.name" />
        
      </LocalForm>
    );
  }
}

export const UserFormComponent = (): React.Node  => (
  <View>
    <Text>User Form</Text>
  </View>
);