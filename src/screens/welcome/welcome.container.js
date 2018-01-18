/* @flow */
import * as React from 'react';
import { View, Text } from 'react-native';
import { compose, renderComponent, withHandlers } from 'recompose';
import { Navigator } from 'react-native-navigation';

import { WelcomeComponent } from './welcome.component';
import type { Component } from 'react';

interface Props {
  navigator: (typeof Navigator),
};

export const WelcomeContainer = compose(
  withHandlers({
    // TODO: need to make Event type work
    handlePress: (props: Props) => event => props.navigator.push({screen: 'app.UserFormScreen', title: 'User Info Input'}),
  })
)(WelcomeComponent);