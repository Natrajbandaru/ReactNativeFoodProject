import React from "react";
import { StyleSheet,View, Text,StatusBar,Button, ScrollView, TextInput, TouchableOpacity } from "react-native";
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
                            <Icon name="download" size={18}  color=""/>
                        </View>
                        <View  style={styles.userCo}>
                            <Icon name="user" size={18}  color="teal"/>
                        </View>
                </View>
                <View style={styles.SearchBarView}>
                    <View style={styles.SearchBarText}>
                        <Icon name="search" color="red" size={18} style={styles.TextIcon}></Icon>
                        <TextInput placeholder=" Restarent name or a dishes" style={styles.TextInput}/>
                        <Icon name="microphone" color="red" size={18} style={styles.TextIcons}></Icon>
                    </View>
                </View>
                <View  style={styles.advContainer}>
                    <View style={styles.banner}>
                        <Text style={{color:"darkslategrey", fontSize:12}}>GOLDEN OFFER</Text>
                    </View>
                    <View style={styles.advContant}>
                        <Icon name="gift" size={45} color="darkgoldenrod"/>
                        <View styles={styles.bannerTextCont}>
                            <Text style={styles.bannerText}>14 days FREE delivery</Text>
                            <Text style={styles.bannerText}>with <Text style={styles.goldText}>GOLD</Text> & much more</Text>
                        </View>
                        {/* <Button title="Claim now" color={"black"} height={1} borderRadius={10}  /> */}
                        <TouchableOpacity style={styles.button}>
                             <Text style={styles.buttext}>Claim Now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <Text>EXPLORE</Text>
                </View>
                <View>
                    <View>
                         <Text>Top 10 Restarents</Text>
                    </View>
                    <View>
                         <Text>Discover the best local resterant near you</Text>
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
    },
    advContainer:{
        flex:1,
        borderWidth:0.2,
        borderRadius:2,
        backgroundColor:"white",
        marginTop:10,
        marginBottom:5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 5, 
        padding:1,
        paddingBottom:10,
    },
    banner:{
        backgroundColor:"bisque",
        borderBottomEndRadius:10,
        width:130,
        justifyContent:"center",
        alignItems:"center"
    },
    advContant:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-around",
        margin:5
    },
    bannerTextCont:{
       flex:1,
       flexDirection:"column"
    },
    bannerText:{
        color:"black",
        fontWeight:"bold",
        fontSize:14
    },
    goldText:{
          fontSize:17,
          color:"chocolate"
    },
    advBut:{
        textAlign:"center",
        width:20,
        height:20,
        backgroundColor:"red"
    },
    button:{
        backgroundColor:"black",
        alignItems:"center",
        width:100,
        borderRadius:8,
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center",
        height:40        
    },
    buttext:{
        color:"white",
        fontSize:15
    }

})