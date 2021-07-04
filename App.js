/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text } from "react-native";
import { StatusBar } from 'react-native';
import DestinationSearch from './src/screens/destinationSearch';

const App: () => Node = () => {

  return (
    <View>
      <StatusBar barStyle="dark-content" />

      <DestinationSearch />
    </View>
  );
};

export default App;
