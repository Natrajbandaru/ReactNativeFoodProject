import React from "react";
import { StyleSheet,View, Text,StatusBar,Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Home";
import About from "../About";

export default ItemsScreen=()=>{
    const Bottom = createBottomTabNavigator();
    return(
       <Bottom.Navigator>
           <Bottom.Screen name="Home"  component={Home}/>
           <Bottom.Screen name="About" component={About}/>
       </Bottom.Navigator>
    )
}
const styles= StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:"#f5f5f5",
        paddingTop:StatusBar.currentHeight,
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        fontSize:24,
        fontWeight:"bold",
      }
})