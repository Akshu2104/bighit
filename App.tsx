/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import LoginSuccess from './src/components/LoginSucces';
import MobileNum from './src/components/MobileNo';
import OtpFun from './src/components/Otp';
import Main from './src/containers/screens/Main';
const App = () => {
  return (
    // <View>
    //   <Text> Hello ......</Text>
    // </View>
    // <OtpFun />
    <Main />
    // <LoginSuccess />
    // <MobileNum />
  );
};

export default App;
