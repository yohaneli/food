import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { styles } from './style'

const Menu = () => {
    return (
        <View style={styles.viewMenu}>
                    <Text style={{
                            fontSize:30,
                            fontWeight:"bold"
                        }}>
                        Prends ça, c'est bien bon
                    </Text>

                    <Text style={{
                        fontSize:30,
                        fontWeight:"bold"
                    }}>
                        Bon appétit
                    </Text>

        </View>
    )
}

export default Menu
