import React from 'react'
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";


class Firebase {

    constructor(){
        this.auth = auth;
        this.firestore = firestore;
    }

    getMenu = () => firestore()
                    .collection("menu")
                    .orderBy("position","asc");
    
    getDataSort = (collection,champ,sens) => firestore()
                    .collection(collection)
                    .orderBy(champ,sens);
                    
}

export default Firebase
