import React,{useContext} from 'react'
import {View,Text,StyleSheet,Image } from 'react-native'
import {styles} from './style'
import {FirebaseContext} from '../../providers'
import {ScrollView} from 'react-native-gesture-handler';


const Menu = () => {

    // const userDocument = firestore()
    //                     .collection('menu');

    // console.log(userDocument)

    return (
        <View style={styles.viewMenu}>

            <Text style={styles.textTitle}>
                Prends ça, c'est bien bon, Bon appétit !
            </Text>

                <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.scrollViewStyle}
                >

                    <View style={styles.viewScrollMenu1}>

                        {/* <Image
                        source={require('../../App/assets/images/5.png')}
                        style={styles.imageMenuStyle}
                        /> */}

                        <Text style={styles.textMenuScrollView}>Burgers</Text>

                    </View>
                                
                </ScrollView>

        </View>

    )
}

export default Menu
