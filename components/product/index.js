import React from 'react';
import {View,Text,Image,TouchableOpacity, Touchable} from 'react-native';
import {styles} from './style'

const Product = ({image,title,description,price}) => {
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
                                
                               {`${price} €`}
                               
                            </Text>

                    </View>

                            <Image
                            source={{uri:image}}
                            style={{height:100,width:80}}
                            />

                            <Text style={styles.thirdText}>
                                An tcho Viande
                            </Text>

                            <Text style={styles.thirdText}>
                                {title}
                                {description}
                            </Text>


        </TouchableOpacity>
    )
}

export default Product
