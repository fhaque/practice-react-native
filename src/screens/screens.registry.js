/* @flow */
import type { Screen } from '.';
import { WelcomeContainer } from "./welcome";

export const screenRegistry: Array<Screen> = [
  {
    screen: 'app.WelcomeScreen',
    title: 'Welcome Screen',
    component: WelcomeContainer,
    navigatorStyle: {},
    navigatorButtons: {},
  },
];