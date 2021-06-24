import React,{useContext,useEffect,useState} from 'react'
import {View,Text,StyleSheet,Image } from 'react-native'
import {styles} from './style'
import {FirebaseContext} from '../../providers'
import {ScrollView} from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import { ActivityIndicator } from 'react-native';


const MenuTitle = ({data}) => {
    return (
    <View style={styles.viewScrollMenu1} >

        <Text style={styles.textMenuScrollView}>{data.name}</Text>

    </View>
    )
}

const Menu = () => {

    const [menuLists,setMenu] = useState([])

    const [isLoading,setIsLoading] = useState(false)
    
    const {getMenu} = useContext(FirebaseContext)

     useEffect(() =>{
         setIsLoading(true)
         const menuSubscriber = getMenu()
         .onSnapshot(dataSnapShot=>{

             const menuData = [] ;
            
             dataSnapShot.forEach(data=>{
                 menuData.push({id:data.id,...data.data()})
                 console.log(" menu data : ",data.data())
                
            })
             setMenu(menuData)
             setTimeout(() => setIsLoading(false),3000)
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

                   { (menuLists.length > 0 && !isLoading) ? menuLists.map((data) =>  
                    <MenuTitle data={data} key={data.id}/>
                   ):<View style={{marginHorizontal:150}}><ActivityIndicator size="small" color="green"/></View>}
                                
                </ScrollView>

        </View>

    )
}

export default Menu
