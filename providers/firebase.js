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
    
    collectionAddProduit = (data) => firestore().collection("produits").add(data)
                    
}

export default Firebase
