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
                            style={{height:50,width:160}}
                             onValueChange={(itemValue,itemIndex)=>
                                 changeCity(itemValue)        
                             }
                            >
                                    <Picker.Item
                                    label="Fort-de-France"
                                    value="Fort-de-France"
                                    style={{fontWeight:"bold"}}
                                    />
                                    <Picker.Item
                                    label="Lamentin"
                                    value="Lamentin"
                                    style={{fontWeight:"bold"}}
                                    />
                                    <Picker.Item
                                    label="Schoelcher"
                                    value="Schoelcher"
                                    style={{fontWeight:"bold"}}
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
