import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {styles} from './style'
import Icon from "react-native-vector-icons/FontAwesome";
import Product from '../product'


const Foodlist = () => {
    return (

        <View>

            <View style={styles.firstView}>

                <View style={styles.secondView}>

                    <Text style={styles.textFoodlist}>Nouveaux produits :</Text>

                </View>
                
                    <View style={styles.styleView3points}>

                        <Icon
                        name="ellipsis-h"
                        size={25}
                        color="white"
                        />

                    </View>

            </View>

                <View style={styles.firstViewList}>

                    <Product 
                    
                    />

                </View>

        </View>
     
    )
}

export default Foodlist
