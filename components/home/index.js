import * as React from 'react';
import Header from "../header";
import Menu from '../menu'
import Foodlist from '../foodlist'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {ScrollView} from 'react-native'

const Home = () => {
    return (
  
      <NavigationContainer>
  
        <ScrollView>    
  
              <Header />
  
              <Menu/>
  
              <Foodlist />
  
        </ScrollView>       
  
      </NavigationContainer>
    );
  };
  
  export default Home;
  