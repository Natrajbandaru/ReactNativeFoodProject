import React from "react";
import { StyleSheet,View, Text ,StatusBar} from "react-native";

export default StudentStcak=()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Hello in StudentStack</Text>
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