import * as React from 'react';
import Header from "../header";
import Menu from '../menu'
import Foodlist from '../foodlist'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {ScrollView,SafeAreaView} from 'react-native'
import { StyleSheet } from 'react-native';

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>

          <Header />
          
            <ScrollView style={styles.scrollView}>

              <Menu/>
                    
              <Foodlist />
      
            </ScrollView>

        </SafeAreaView>

    );
  };
  
  export default Home;
  
  const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"black"
    },
    scrollView:{
      backgroundColor:"black",
      marginHorizontal:1
    }
  })