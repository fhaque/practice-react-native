/* @flow */
import * as React from 'react';
import { View, Text } from 'react-native';
import { compose, renderComponent, hoistStatics } from 'recompose';

import { WelcomeComponent } from './welcome.component';
import type { Component } from 'react';


export const WelcomeContainer = compose(hoistStatics)(WelcomeComponent);