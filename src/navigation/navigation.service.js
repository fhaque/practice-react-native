/* @flow */
import { Navigator } from 'react-native-navigation';
import { screenRegistry } from '../screens';
import type { Screen } from '../screens';

class NavService {
  navigator: typeof Navigator;

  constructor( navigator: typeof Navigator ) {
    this.cacheNavigator(navigator);
    console.log('constructor call')
  }

  changeScreen( screenID: string ) {
    const screen: Screen = screenRegistry.find( (screen: Screen) => screen.screen === screenID );
    if (screen) {
      this.navigator.push({
        screen: screen.screen,
        title: screen.title,
      });
    }
  }

  cacheNavigator( navigator: typeof Navigator ) {
    this.navigator = navigator;
  }

}

export const navService = new NavService();