import React from 'react'
import { View, StyleSheet,SafeAreaView, ImageBackground, TouchableOpacity,Text, Image } from 'react-native'
import * as Animatable from 'react-native-animatable';

 const MainCard = ({title,image,navigation,goTo}) => {
 
               return<View
               style={{flex:0.15,
               width:'95%',
               
              shadowColor:'#7F5DF0',
               shadowOffset:{
                width:0,
                height:10,
                 },
 shadowOpacity:0.25,
 shadowRadius:3.5,
 elevation:5,
               overflow:'hidden',
               borderRadius:20,
               marginTop:20,
               height:100,
               alignSelf:'center'}}>
                   <Animatable.View  animation="flipInX" style={{flex:1}} >
               <ImageBackground source={require('../assets/MainCard.jpg')} style={{flex:1}} >
                   <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',flex:1,justifyContent:'space-between',marginHorizontal:30}}>
                       <Text style={{fontSize:20}}>{title}</Text>
                       <Image  style={{width:65,height:65}}source={image}/>
                   </View>
               </ImageBackground>
               </Animatable.View>
               </View>
                }
  const styles = StyleSheet.create({
  })

  export default MainCard ;