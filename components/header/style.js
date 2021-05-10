import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    viewHeader:{
        flexDirection:"row",
        alignItems:'center',
        marginTop:40,
        marginHorizontal:20,
        backgroundColor:"red"
        },
    imageLeft:{
        width:"10%"
    },
    center:{
        width:"80%",
        alignItems:'center',
        backgroundColor:"green"
    },
    right:{
        width:"10%"
    },
    pickerStyle:{
        height:50,
        width:160
    },
    pickerItemStyle:{
        fontWeight:"bold"
    }
})
