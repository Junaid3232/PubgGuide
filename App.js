import React, { useEffect, useState } from 'react';
import { View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Home from './src/screens/Home'
import OnBoarding from './src/screens/OnBoarding'
import { elastic } from 'react-native/Libraries/Animated/Easing';

import Tabs from './navigation/Tabs'
import StackNavigation from './navigation/StackNavigation'
import Onboarding from 'react-native-onboarding-swiper';


const Stack = createStackNavigator();
const App=()=>{
  const [firstLunched, setFirstLaunched]=useState(true)


//   useEffect(()=>{
//  AsyncStorage.getItem('alreadyLanched').then(value=> {
//    if (value=== null) {
//      AsyncStorage.setItem('alreadyLanched', 'true')
//      setFirstLaunched(true)
//    }
//    else {
//      setFirstLaunched(false)
//    }
//  })
//   },[])

  if (firstLunched===null){
    return null
  } else if (firstLunched=== true){

    return(
    <NavigationContainer   >
     <Tabs/>
     {/* <StackNavigation/> */}
  </NavigationContainer>)
  }
  else {
    return <Home/>
  }

}
export default App
