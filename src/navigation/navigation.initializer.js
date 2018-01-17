/* @flow */
import { Navigation } from 'react-native-navigation';
import { registerScreen } from '.';

import type { Screen } from '../screens';
import type { INavInitOptions } from '.';

export const navigationInitializer = (
  screenRegistry: Screen[], 
  options: INavInitOptions
): void => {
  screenRegistry.map( registerScreen );
  Navigation.startSingleScreenApp(options);
};
