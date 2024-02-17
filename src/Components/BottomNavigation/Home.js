import React from "react";
import { StyleSheet,View, Text,StatusBar,Button } from "react-native";

export default Home=({navigation})=>{
    return(
        <View style={styles.container}>
            <Button title="Go Home" onPress={()=>navigation.navigate("ItemsScreen")}/>
            <Text style={styles.text}>Home</Text>
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