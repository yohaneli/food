import React from 'react';
import {View,Text,Image,TouchableOpacity, Touchable} from 'react-native';
import {styles} from './style'

const Product = () => {
    return (
        <TouchableOpacity
        style={styles.styleTouch}
        >
            <View style={styles.firstView}>

                        <Image
                            source={require('../../App/assets/images/3.png')}
                            style={{height:25,width:20}}
                        />

                            <Text style={styles.caloryStyle}>
                                300 calories
                            </Text>

                    </View>

                            <Image
                            source={require('../../App/assets/images/4.png')}
                            style={{height:100,width:80}}
                            />

                            <Text style={styles.thirdText}>
                                An tcho Viande
                            </Text>

        </TouchableOpacity>
    )
}

export default Product
