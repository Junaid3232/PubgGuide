import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';

const SatCard=({power,range,stable,firing})=>{
    return <View style={{width:'90%',marginTop:'22%',padding:'4%',borderRadius:10, backgroundColor:'white',alignSelf:'center',justifyContent:'center',  shadowOffset:{
        width:0,
        height:10,
         },
shadowOpacity:0.25,
shadowRadius:3.5,
elevation:5}}>
  <View style={{marginLeft:30}}>
  <Text style={{}}>Power</Text>
    <ProgressBar progress={power} color={"red"} style={{marginHorizontal:'15%',width:"80%",position:'absolute',left:10,bottom:5}} />
    <Text style={{}}>Range</Text>
    <ProgressBar progress={range} color={"orange"} style={{marginHorizontal:'15%',width:"80%",position:'absolute',left:10,bottom:5}} />
    <Text style={{}}>Stable</Text>
    <ProgressBar progress={stable} color={"skyblue"} style={{marginHorizontal:'15%',width:"80%",position:'absolute',left:10,bottom:5}} />
    <Text style={{}}>Firing</Text>
    <ProgressBar progress={firing} color={"#ed6905"} style={{marginHorizontal:'15%',width:"80%",position:'absolute',left:10,bottom:5}} />
  
    </View>
    </View>
}
const styles=StyleSheet.create({
 container:{

 }
})

export default SatCard