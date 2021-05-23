import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';

const SatCard=({power,range,stable,firing})=>{
 
     return   <View style={power?  styles.container : styles.condition}>
  
  <View style={{marginLeft:30}}>
 {power &&  <Text style={{}}>Power</Text> }
 {power &&  <ProgressBar progress={power} color={"red"} style={styles.progress} /> }
  {range &&  <Text style={{}}>Range</Text> }
  {range &&   <ProgressBar progress={range} color={"orange"} style={styles.progress} />}
   {stable &&   <Text style={{}}>Stable</Text>}
   {stable &&   <ProgressBar progress={stable} color={"skyblue"} style={styles.progress} />}
   {firing &&   <Text style={{}}>Firing</Text>}
   {firing &&   <ProgressBar progress={firing} color={"#ed6905"} style={styles.progress} />}
  
    </View>  
    </View> 
} 
const styles=StyleSheet.create({
 container:{  width:'90%',
 marginTop:'22%',
 padding:'4%',
 borderRadius:10,
  backgroundColor:'white',
  alignSelf:'center',
  justifyContent:'center', 
   shadowOffset:{
  width:0,
  height:10,
   },
shadowOpacity:0.25,
shadowRadius:3.5,
elevation:5 },
condition :{ 
marginTop: '22%'
},
progress:{marginHorizontal:'15%',width:"80%",position:'absolute',left:10,bottom:5}
})

export default SatCard