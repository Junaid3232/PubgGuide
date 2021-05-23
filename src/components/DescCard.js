import React from 'react';
import { View,Text,StyleSheet, Image } from 'react-native';

const DescCard=({ammo,ammoPic,capacity,des})=>{
    console.log("****AMMO PIC",ammoPic)
    return <View style={styles.container}>
        { ammo ? 
        <View style={styles.container2}>
        <Text style={{alignSelf:'center',fontWeight:'bold'}}>AMMUNATION</Text>
        <View style={{flexDirection:'row'}}>
        <Text style={{marginTop:'2%',marginLeft:'8%'}}>{ammo}</Text>
        
        <Image  style={{width:55,height:55,position:'absolute',right:25, }} source={ammoPic}/>
        </View>
       
        <View style={{flexDirection:'row'}}>
        <Text style={{marginTop:'2%',marginLeft:'8%'}}>Magzine Capacity:  
        <Text> {capacity}</Text></Text></View>
       
        </View> : null }
        <View style={{padding:'4%',width:'100%',backgroundColor:'white',alignSelf:'center',marginTop:'3%',borderRadius:10}}>
        <Text style={{alignSelf:'center',marginTop:'1%',fontWeight:'bold'}}>DESCRIPTION</Text>
        <Text style={{marginTop:'4%',marginLeft:'8%'}}>{des}

</Text>
        </View>
    
    </View>
}

const styles=StyleSheet.create({
      container:{padding:'4%',width:'90%',backgroundColor:'orange',alignSelf:'center', borderRadius:10, marginTop:'5%',shadowOffset:{
        width:0,
        height:10,
         },
shadowOpacity:0.25,
shadowRadius:3.5,
elevation:5},
container2:{padding:'5%',width:'100%',backgroundColor:'white',alignSelf:'center',marginTop:'3%',borderRadius:10}

})
export default DescCard;