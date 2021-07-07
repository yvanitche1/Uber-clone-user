/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text, ImageBackground } from "react-native";
import { StatusBar } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen'
import Bg from './src/assets/images/bg.jpg'
import style from './src/components/Logo/style';
import DestinationSearch from './src/screens/destinationSearch'
import SearchResults from './src/screens/SearchResults';
import * as firebase from 'firebase'


class App extends Component {
  state = {
    loggedIn: null,
  }

  // componentDidMount() {
  //   const firebaseConfig = {
  //     apiKey: "AIzaSyDTz2m_vCybdR-PuEEbuuA6HFuCAvgBvME",
  //     authDomain: "uber-clone-90429.firebaseapp.com",
  //     projectId: "uber-clone-90429",
  //     storageBucket: "uber-clone-90429.appspot.com",
  //     messagingSenderId: "920260504037",
  //     appId: "1:920260504037:web:bf832301f8f4b91ea0670c"
  //   };
  //   // Initialize Firebase
  //   firebase.initializeApp(firebaseConfig);

  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       this.setState({
  //         loggedIn: true,
  //       })
  //     } else {
  //       this.setState({
  //         loggedIn: false,
  //       })
  //     }
  //   })
  // }



  // renderComponent = () => {
  //   switch (this.state.loggedIn) {
  //     case false:
  //       return <ImageBackground style={style.container} source={Bg}>
  //         <LoginScreen />
  //       </ImageBackground>

  //     case true:
  //       return <HomeScreen />
  //   }
  // }

  render() {
    return (
      <View>
        {/* {this.renderComponent()} */}
        <SearchResults />
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
