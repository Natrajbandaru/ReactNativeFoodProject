import React from "react";
import { StyleSheet,View, Text,StatusBar,Button, ScrollView, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/FontAwesome';

export default Delevery=()=>{
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.placeContainer}>
                       <Icon name="location-arrow" size={25} color="red" style={{marginLeft:"1%",marginRight:"2%"}}/>
                        <View style={styles.locationCon}>
                            <Text style={styles.locationHead}>KAR Bhawan <Icon name="toggle-down" size={15}/></Text>
                            <Text style={styles.locationDesc}>Bhanu Prased Rava Flyover,Swaraj Nayak...</Text>
                        </View>
                        <View  style={styles.userCon}>
                            <Icon name="download" size={18}/>
                        </View>
                        <View  style={styles.userCo}>
                            <Icon name="user" size={18}/>
                        </View>

                </View>
                <View style={styles.SearchBarView}>
                    <View style={styles.SearchBarText}>
                        <Icon name="search" color="red" size={18} style={styles.TextIcon}></Icon>
                        <TextInput placeholder=" Restarent name or a dishes" style={styles.TextInput}/>
                        <Icon name="microphone" color="red" size={18} style={styles.TextIcons}></Icon>
                    </View>
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
        marginBottom:5,
        borderRadius:8,
        backgroundColor:"white",
        shadowColor:"black",
        elevation:3,
        shadowRadius:4,
        shadowOpacity:1,
        shadowOffset: { width: 0, height: 5 },
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
      },
      placeContainer:{
        flex:1,
        flexDirection:"row",
        backgroundColor:"white",
        marginTop:5,
        marginBottom:5,
        alignItems:"center",
        padding:2,
        height:50,
        borderRadius:10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 3, 
        justifyContent:"space-around"
    },
    locationHead:{
        fontWeight:"bold",
        fontSize:17,
    },
    locationDesc:{
        fontSize:12,
        fontStyle:"normal",
        color:"grey"
    },
    userCon:{
        height:20,
        width:20,
        borderWidth:0.2,
        borderRadius:2,
        shadowColor:"black",
        shadowOpacity:0.6,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        elevation:1,
    },
    userCo:{
        height:30,
        width:30,
        borderWidth:0.2,
        borderRadius:100,
        shadowColor:"royalblue",
        shadowOpacity:1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        elevation:4,
        alignItems:"center",
        justifyContent:"center",
    }
})