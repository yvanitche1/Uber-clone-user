/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text } from "react-native";
import { StatusBar } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen'

class App extends Component {
  state = {
    loggedIn: false,
  }

  renderComponent = () => {
    switch (this.state.loggedIn) {
      case false:
        return <LoginScreen />

      case true:
        return <HomeScreen />
    }
  }

  render() {
    return (
      <View>
        {this.renderComponent()}
      </View>
    );
  }
}

// const App: () => Node = () => {

//   return (
//     <View>
//       <StatusBar barStyle="dark-content" />

//       <LoginScreen />
//     </View>
//   );
// };

export default App;
