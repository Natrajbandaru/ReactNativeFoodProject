import React from "react";
import { StyleSheet,View, Text,StatusBar,Button, ScrollView, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/FontAwesome';

export default Delevery=()=>{
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.SearchBarView}>
                    <View style={styles.SearchBarText}>
                        <Icon name="search" color="red" size={15} style={styles.TextIcon}></Icon>
                        <TextInput placeholder=" Restarent name or a dishes" style={styles.TextInput}/>
                        <Icon name="heart" color="red" size={15} style={styles.TextIcons}></Icon>
                    </View>
                    {/* <TextInput  style={styles.SearchBarText} placeholder=" Restarent name or a dishes" ></TextInput> */}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:"#f5f5f5",
        margin:10
       // paddingTop:StatusBar.currentHeight,
    },
    text:{
        fontSize:24,
        fontWeight:"bold",
      },
      SearchBarView:{
        marginTop:5,
        marginBottom:5
      },
      SearchBarText:{
        borderRadius:2,
        borderWidth:0.1,
        height:50,
        flex:1,
        flexDirection:"row",
        alignItems:"center",
        paddingStart:10
      },
      TextIcon:{
        marginRight:20
      },
      TextIcons:{
       alignItems:"flex-end",
       marginLeft:120
      }
})