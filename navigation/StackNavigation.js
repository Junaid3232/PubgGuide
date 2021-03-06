import React from 'react';
import { View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../src/screens/Home'

import GunsScreen from '../src/screens/GunsScreen';
import OnBoarding from '../src/screens/OnBoarding'
import Tabs from './Tabs';
import DetailsScreen from '../src/components/DetailsScreen';
import Assault from '../src/components/Assault';
import AttachmentsScreen from '../src/screens/AttachmentsScreen'
import HealthScreen from '../src/screens/HealthScreen'
import AmmoScreen from '../src/screens/AmmoScreen'


const Stack = createStackNavigator();

const StackNavigation=()=> {
  return (
    
  <Stack.Navigator>
         <Stack.Screen name="AppHome" component={Home} options={{ headerShown: false,}}/>
    <Stack.Screen name="OnBoarding" component={OnBoarding} options={{ headerVisible: false,}} />
  
      
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Guns" component={GunsScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Assault" component={Assault}/>
        <Stack.Screen name="Attachments" component={AttachmentsScreen}/>
        <Stack.Screen name="Health" component={HealthScreen}/>
        <Stack.Screen name="Ammo" component={AmmoScreen}/>
       
</Stack.Navigator>
  
  );
}

export default StackNavigation;