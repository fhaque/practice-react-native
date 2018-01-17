/* @flow */
import { navigationInitializer } from './src/navigation';
import { screenRegistry } from './src/screens';

import type { INavInitOptions } from './src/navigation';

const options: INavInitOptions = {
  screen: screenRegistry[0],
};

navigationInitializer(screenRegistry, options);
