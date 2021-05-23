
import React from 'react';
import { View,Text, Button,Image, ImageBackground, SafeAreaView, FlatList } from 'react-native';
import TipsScreen from './GunsScreen'
import HomeCard from '../components/HomeCard'
import MainCard from '../components/MainCard'

import * as Animatable from 'react-native-animatable';
import { TouchableOpacity } from 'react-native-gesture-handler';
const categories=[{
    id:0,
    image:require('../assets/PUBG/GUNS/AR/m416.png'),
    title:'GUNS',
    des:'USES 5.56 AMMO',
    goTo:'Guns'
},

{
    id:1,
    image:require('../assets/PUBG/ATTACHMENTS/MAGAZINES/extended.png'),
    title:'ATTACHMENTS',
    des:'USES 5.56 AMMO',
    goTo:'Attachments'
},
{
    id:2,
    image:require('../assets/PUBG/HEALTH/Healing/firstAidKit.png'),
    title:'HEALTH',
    des:'USES 5.56 AMMO',
    goTo: 'Health'
},
{
    id:4,
    image:require('../assets/PUBG/AMMUNATION/5.56mm.png'),
    title:'AMMUNATION',
    des:'USES 5.56 AMMO',
    goTo:'Ammo'
},
{
    id:3,
    image:require('../assets/unnamed.png'),
    title:'MAPS',
    des:'USES 5.56 AMMO'
},

]

const Home=({navigation})=>{
 
    const renderItem = ({ item }) => {
    
        return (
            <TouchableOpacity onPress={()=>navigation.navigate(item.goTo,{
                id:item.id,
                image:item.image
           })}>
            <MainCard image={item.image} title={item.title} navigation={navigation} goTo={item.goTo}/>
            </TouchableOpacity>
        
        );
      };


  return<ImageBackground source={require('../assets/background.jpg')} style={{  flex: 1 }}>
      <SafeAreaView style={{flex:1}}>
        
          <Animatable.Text animation="zoomInUp" style={{fontSize:20, color:'white', fontWeight:'bold',marginLeft:15, marginTop:'19%'}}>GUIDE PUBG FOR BEGINNERS</Animatable.Text>
      {/* <Animatable.Text animation="zoomInUp">Zoom me up, Scotty</Animatable.Text> */}
 <View style={{}}>
      <FlatList data={categories}
       keyExtractor={item => item.id}
      renderItem={renderItem}
      style={{}}
      
       
      />
  </View>
      </SafeAreaView>
</ImageBackground>
}
export default Home