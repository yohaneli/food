import React,{useContext,useEffect,useState} from 'react'
import {View,Text,StyleSheet,Image } from 'react-native'
import {styles} from './style'
import {FirebaseContext} from '../../providers'
import {ScrollView} from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';


const Menu = () => {

    const [menuLists,setMenu] = useState([])
    
    const {getMenu} = useContext(FirebaseContext)

     useEffect(() =>{
         const menuSubscriber = getMenu()
         .onSnapshot(dataSnapShot=>{

             const menuData = [] ;
            
             dataSnapShot.forEach(data=>{
                 menuData.push({id:data.id,...data.data()})
                 console.log(" menu data : ",data.data())
                
            })
             setMenu(menuData)
             console.log(" datasnapshot : ",menuLists)

         })

             return () => menuSubscriber()        
     },[])

    return (
        <View style={styles.viewMenu}>

            <Text style={styles.textTitle}>
                Prends ça, c'est bien bon, Bon appétit !
            </Text>

                <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.scrollViewStyle}
                >

                   { menuLists && menuLists.map((data) =>  <View style={styles.viewScrollMenu1} key={data.id}>

                        <Text style={styles.textMenuScrollView}>{data.name}</Text>

                    </View>)}
                                
                </ScrollView>

        </View>

    )
}

export default Menu
