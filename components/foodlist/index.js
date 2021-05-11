import React,{useContext,useState,useEffect} from 'react'
import { View, Text, StyleSheet,FlatList } from 'react-native'
import {styles} from './style'
import Icon from "react-native-vector-icons/FontAwesome";
import Product from '../product'
import {FirebaseContext} from '../../providers'

const renderProduct = ({item}) => {
    console.log('ITEM : --------------------------------------',item)
    return(
        <Product
            image={item.image}
            title={item.name}
            description={item.description}
            price={item.price}
        />
    )
}

const Foodlist = () => {


    const [products,setProducts] = useState([]);

    const {getDataSort} = useContext(FirebaseContext);

    useEffect(() =>{
        const productSubscriber = getDataSort("produits","price","asc")
        .onSnapshot(dataSnapShot=>{

            const productData = [] ;
           
            dataSnapShot.forEach(data=>{
                productData.push({id:data.id,...data.data()})
                console.log(" Liste des produits : ",data.data())
               
           })
            setProducts(productData)
            console.log(" datasnapshot : ",products)

        })

            return () => productSubscriber()        
    },[])




    return (

        <View>

            <View style={styles.firstView}>

                <View style={styles.secondView}>

                    <Text style={styles.textFoodlist}>Nouveaux produits :</Text>

                </View>
                
                    <View style={styles.styleView3points}>

                        <Icon
                        name="ellipsis-h"
                        size={25}
                        color="white"
                        />

                    </View>

            </View>

                <View style={styles.firstViewList}>

                    <FlatList
                    data={products}
                    numColumns={2}
                    renderItem={renderProduct}
                    keyExtractor={item=> item.id}
                    />

                </View>

        </View>
     
    )
}

export default Foodlist
