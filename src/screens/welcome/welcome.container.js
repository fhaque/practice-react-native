/* @flow */
import * as React from 'react';
import { View, Text } from 'react-native';
import { compose, renderComponent, withHandlers, lifecycle } from 'recompose';
import { Navigator } from 'react-native-navigation';

import { SCREEN_IDS } from '../screens.constants';

import { navService } from '../../navigation';

import { WelcomeComponent } from './welcome.component';


interface Props {
  navigator: (typeof Navigator),
};

export const WelcomeContainer = compose(
  withHandlers({
    // TODO: need to make Event type work
    handlePress: (props: Props) => event => navService.changeScreen(SCREEN_IDS.USER_FORM),
  }),
  lifecycle({
    componentDidMount() {
      console.log(this.props.navigator);
      navService.cacheNavigator( (this.props: Props).navigator );
    }
  })
)(WelcomeComponent);