import React from "react";
import { StyleSheet,View, Text,StatusBar,Button } from "react-native";
import StackMainPage from "../StackNavigation/StackMainPage";
export default BottomAbout=({navigation})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>BottomAbout</Text>
        </View>
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