import React from 'react';
import { View,Text, Button,Image, ImageBackground, SafeAreaView, FlatList } from 'react-native';

import HomeCard from '../components/HomeCard'

import * as Animatable from 'react-native-animatable';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Assault=({navigation,route})=>{
  const {categories}=route.params
 const {guns}=route.params

// const gunss= guns.map((guns)=>guns)
 console.log("****JJL*****",categories)

    const renderItem = ({item }) => {
       return<TouchableOpacity onPress={()=>navigation.navigate('Details',{image:item.image, title:item.title,ammo:item.ammo,ammoPic:item.ammoPic,capacity:item.capacity,power:item.power,range:item.range,stable:item.stable,firing:item.firing,des:item.des})}> 
           
            <HomeCard  image={item.image} title={item.title} des={item.ammo} animation="zoomInDown" navigation={navigation} goTo={item.goTo}/>
          </TouchableOpacity>
      
      };


  return<ImageBackground source={require('../assets/background.jpg')} style={{  flex: 1 }}>
      <SafeAreaView style={{flex:1}}>
        
          <Animatable.Text animation="zoomInUp" style={{fontSize:20, color:'white', fontWeight:'bold',marginLeft:15, marginTop:'19%'}}>GUIDE PUBG FOR BEGINNERS</Animatable.Text>
      {/* <Animatable.Text animation="zoomInUp">Zoom me up, Scotty</Animatable.Text> */}
 <View style={{flex:7.3,justifyContent:'center',alignItems:'center'}}>
      <FlatList data={categories}
    numColumns={2}
    horizontal={false}
       keyExtractor={item => item.id}
      renderItem={renderItem}
      style={{}}
      
       
      />
  </View>
      </SafeAreaView>
</ImageBackground>
}
export default Assault



