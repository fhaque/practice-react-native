/* @flow */
import * as React from 'react';
import { View, Text, Button } from 'react-native';

import type { SyntheticEvent } from 'react-native';

type Props = {
  handlePress: (Event) => any,
}

export const WelcomeComponent = (
  { handlePress = () => {} }: Props
): React.Node => (
  <View>
    <Text>Cheese!</Text>
    <Button onPress={(e) => handlePress(e)} title="Start!"></Button>
  </View>
);