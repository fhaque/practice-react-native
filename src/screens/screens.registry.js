/* @flow */
import type { Screen } from '.';
import { WelcomeContainer } from './welcome';
import { UserFormContainer } from './user-form';

export const screenRegistry: Array<Screen> = [
  {
    screen: 'app.WelcomeScreen',
    title: 'Welcome Screen',
    component: WelcomeContainer,
    navigatorStyle: {},
    navigatorButtons: {},
  },
  {
    screen: 'app.UserFormScreen',
    title: 'User Information',
    component: UserFormContainer,
    navigatorStyle: {},
    navigatorButtons: {},
  },
];