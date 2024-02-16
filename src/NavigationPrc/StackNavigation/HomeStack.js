import React from "react";
import { StyleSheet,View, Text ,StatusBar, Button} from "react-native";
import BottomMainNavigation from "../BottomNavigation/BottomMainNavigation";
export default HomeStcak=()=>{
    return <BottomMainNavigation/>;
    
}

const styles= StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:"#f5f5f5",
        paddingTop:StatusBar.currentHeight,
        alignItems:"center",
        justifyContent:"flex-end"
    },
    text:{
        fontSize:24,
        fontWeight:"bold",
      }
})