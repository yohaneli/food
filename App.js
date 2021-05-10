/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Icon } from 'react-native-elements'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Header from './components/header'
import Menu from './components/menu'
import Foodlist from './components/foodlist'



const App = () => {
  return (

    <NavigationContainer>     

          <Header />

          <Menu/>

          <Foodlist />

      
    </NavigationContainer>
  );
};

export default App;
