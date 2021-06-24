/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useContext} from 'react';
//import { Icon } from 'react-native-elements'
import Home from './components/home'
//import {FirebaseContext} from './providers'


const App = () => {

  // const {collectionAddProduit,firestore} = useContext(FirebaseContext)

  // collectionAddProduit({
  //   image:"https://firebasestorage.googleapis.com/v0/b/food-be28c.appspot.com/o/images%2Fproduits%2F4.png?alt=media&token=edae1b29-0416-4075-8463-a15c358f80fe",
  //   name: "Produit X",
  //   description:`Description ${Date.now()}`,
  //   price:11,
  //   dateAdd:firestore.Timestamp.fromDate(new Date())
  // })
  return (
      <Home/>
  );
};

export default App;
