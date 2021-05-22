import React from 'react';
import { View, ImageBackground, Text, Image,StyleSheet,ScrollView } from 'react-native';

import SatCard from '../components/SatCard'
import DescCard from '../components/DescCard'


const DetailsScreen =({route,navigation})=>{
    const {image,title,ammoPic,ammo,capacity,power,range,stable,firing,des} = route.params;
    return<ImageBackground  source={require('../assets/DetailCard.jpg')} style={{flex:1}}>
       <ScrollView>
        <View style={{justifyContent:'center',alignItems:'center',marginBottom:'-5%'}}>
            
            <Text style={{fontSize:22,marginTop:'2%',color:'white',fontWeight:'bold'}}>
                {title}</Text></View>
     
        <Image  source={image} 
        style={{
            width:110,
             height:110,
             justifyContent:'center',alignSelf:'center',marginTop:'10%'}} />
      
        <SatCard power={power} range={range} stable={stable} firing={firing}/>
        <DescCard ammo={ammo} ammoPic={ammoPic} capacity={capacity} des={des}/>
        </ScrollView>
       
        </ImageBackground>
}

const style=StyleSheet.create({

})

export default DetailsScreen