import React from 'react';
import { View,Text,Button,Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

import Home from '../screens/Home'
const OnBoarding=({navigation})=>{
  return<Onboarding
  onDone={()=>navigation.navigate("AppHome")}
  onSkip={()=>navigation.navigate("AppHome")}
  pages={[
   
    {
      backgroundColor: 'black',
      image: <Image source={require('../assets/pubg.png')} style={{width:300,height:300}} />,
      title: 'Unity',
      subtitle: 'Keep Unity while Playing',
    },
    {
      backgroundColor: 'orange',
      image: <Image source={require('../assets/pubg1.png')} style={{width:250,height:250}} />,
      title: 'Epic',
      subtitle: 'Epic game play need proper guide',
    },
    {
      backgroundColor: 'red',
      image: <Image source={require('../assets/pubg2.png')} />,
      title: 'Fate',
      subtitle: 'Fate makes your gameplay more strong',
    },
   
  ]}
/>
}
export default OnBoarding