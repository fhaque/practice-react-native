/* @flow */
import type { Component } from 'react';

export type Screen = {
  screen: string,
  title: string,
  component: Class<Component<any, any>>,
  navigatorStyle: {},
  navigatorButtons: {},
};