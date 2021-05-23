import React from 'react';
import { Image, StyleSheet, View,Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../src/screens/Home'
import GunsScreen from '../src/screens/GunsScreen'
import onboarding from '../src/screens/OnBoarding'
import MainCard from "../src/components/MainCard";

import StackNavigation from './StackNavigation'
import Assault from '../src/components/Assault';

const Tab = createBottomTabNavigator();

const Tabs=()=> {
  return (

    <Tab.Navigator initialRouteName="Home" tabBarOptions={{
        showLabel:false,
        style:{position:'absolute',
        bottom:25,
        left:20,
        right:20,
        borderRadius:15,
        backgroundColor:'white',
        height:80,
        ...styles.shadow

     }
    }}>

   
      <Tab.Screen name="Homee" component={MainCard} options={{

          tabBarIcon:({focused})=>(
          <View style={{alignItems:'center', justifyContent:'center', top:10}}>
              <Image source={require('../src/assets/icons/maps.png')}
              resizeMode='contain'
              style={{width:30,
              height:30,

              tintColor:focused?'darkorange':'#748c94'}}
              />
              <Text style={{color:focused?'darkorange':'#748c94', fontSize:12}}> Maps</Text>
          </View>
      )}} />
      <Tab.Screen name="Home" component={StackNavigation} options={{ tabBarIcon:({focused})=>(
          <View style={{alignItems:'center', justifyContent:'center', top:10}}>
              <Image source={require('../src/assets/icons/home.png')}
              resizeMode='contain'
              style={{width:80,
              height:80,
             marginBottom:25,
            //  tintColor:focused?'darkorange':'#748c94'

         
            }}
              />

          </View>
      )}} />
      <Tab.Screen name="Guns" component={GunsScreen} options={{ tabBarIcon:({focused})=>(
          <View style={{alignItems:'center', justifyContent:'center', top:10}}>
              <Image source={require('../src/assets/icons/tips.png')}
              resizeMode='contain'
              style={{width:30,
              height:30,

              tintColor:focused?'darkorange':'#748c94'}}/>
              <Text style={{color:focused?'darkorange':'#748c94', fontSize:12}}> Tips</Text>
          </View>
      )}} />
     
    </Tab.Navigator>

  );
}

const styles=StyleSheet.create({
    shadow:{
        shadowColor:'#7F5DF0',
        shadowOffset:{
            width:0,
            height:5,
        },
        shadowOpacity:0.25,
        shadowRadius:3.5,
        elevation:5
    }
})
export default Tabs
