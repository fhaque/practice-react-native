/* @flow */
import { Navigation } from 'react-native-navigation';
import { Screen } from '../screens';

export const registerScreen = (screen: Screen): void => {
  Navigation.registerComponent(screen.screen, () => screen.component);
}
