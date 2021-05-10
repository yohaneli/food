import React from 'react'
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";


class Firebase {

    constructor(){
        this.auth = auth;
        this.firestore = firestore();
    }
}

export default Firebase
