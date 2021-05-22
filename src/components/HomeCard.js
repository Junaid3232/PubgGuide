import React, { useState } from 'react';
import { View,Text, Button,StyleSheet, Image, ImageBackground } from 'react-native';

import { useIsFocused } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable';
import { useEffect } from 'react/cjs/react.development';
import { TouchableOpacity } from 'react-native-gesture-handler';
const HomeCard=({title,image,des,animation,navigation,goTo})=>{
    
    const isFocused = useIsFocused()

    useEffect(() => {
        //Update the state you want to be updated
    } , [isFocused])

    
   
    

  return<View   style={{alignItems:'center',marginRight:10,marginLeft:10}}>
      
      <Animatable.View  animation="flipInX" 
      style={{ backgroundColor:'#ffffff',
              borderRadius:10,
              
              shadowColor:'#7F5DF0',
              width:160,
              justifyContent:'center',
              alignItems:'center',
              height:180,
              marginTop:'12%',
              shadowOffset:{
                           width:0,
                           height:10,
                            },
            shadowOpacity:0.25,
            shadowRadius:3.5,
            elevation:5}}>
  
      <View animation={animation} style={{justifyContent:'center',alignItems:'center' }}>
   <Image source={image} style={{width:75, height:75}} />
   <Text animation="zoomInDown" style={{fontSize:18,color:'black', marginTop:'10%'}}>{title}</Text>
   <Text style={{ color:'gray', fontSize:12}}> {des}</Text>
  
  </View>

  </Animatable.View>

 </View>
 
 
 

}

const styles=StyleSheet.create({

})
export default HomeCard