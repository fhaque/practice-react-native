/* @flow */
import type { Screen } from '.';
import { WelcomeContainer } from './welcome';
import { UserFormContainer } from './user-form';
import { SCREEN_IDS } from './screens.constants';


export const screenRegistry: Array<Screen> = [
  {
    screen: SCREEN_IDS.WELCOME,
    title: 'Welcome Screen',
    component: WelcomeContainer,
    navigatorStyle: {},
    navigatorButtons: {},
  },
  {
    screen: SCREEN_IDS.USER_FORM,
    title: 'User Information',
    component: UserFormContainer,
    navigatorStyle: {},
    navigatorButtons: {},
  },
];