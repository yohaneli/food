import React,{useState,useEffect} from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'
import { styles } from './style'
import {Picker} from '@react-native-picker/picker';
import Icon from "react-native-vector-icons/FontAwesome";

const Header = () => {

    const [city,changeCity] = useState("Fort-de-France");

    return (
        <View style={styles.viewHeader}>

                <View style={styles.imageLeft}>

                    <Image
                        source={require('../../App/assets/images/1.png')}
                    />

                </View>

                    <View style={styles.center}>

                            <Picker
                            selectedValue={city}
                            style={styles.pickerStyle}
                             onValueChange={(itemValue,itemIndex)=>
                                 changeCity(itemValue)        
                             }
                            >

                                <Picker.Item
                                label="Fort-de-France"
                                value="Fort-de-France"
                                style={styles.pickerItemStyle}
                                />
                                <Picker.Item
                                label="Lamentin"
                                value="Lamentin"
                                style={styles.pickerItemStyle}
                                />
                                <Picker.Item
                                label="Schoelcher"
                                value="Schoelcher"
                                style={styles.pickerItemStyle}
                                />

                            </Picker>

                    </View>

                        <View style={styles.right}>

                            <Icon name="user" size={20} 
                            />

                        </View>

        </View>
    )
}

export default Header
