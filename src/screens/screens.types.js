/* @flow */
import * as React from 'react';

export type Screen = {
  screen: string,
  title: string,
  component: Class<React.Component<any, any>> | React.Component<any, any> | React.ComponentClass<any>,
  navigatorStyle: {},
  navigatorButtons: {},
};