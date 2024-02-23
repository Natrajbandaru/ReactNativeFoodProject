import React from "react";
import { StyleSheet,View, Text,StatusBar,Button, ScrollView,Image, TextInput, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/FontAwesome';
import ListOfMind from "../ListOfMind";
import ListOfMind2 from "../ListOfMind2";

import FlatListData from "./FlatList";

export default Delevery=()=>{
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView        showsVerticalScrollIndicator={false}>
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
                <View style={styles.exp}>
                    <View style={styles.line} />
                    <Text  style={styles.expText}>EXPLORE</Text>
                    <View style={styles.line} />
                </View>
                <View style={styles.expBannerCon}>
                    <View style={styles.expBannerCol}>
                         <Text style={styles.banMainHead}>Top 10 Restarents</Text>
                         <Text style={styles.banMaitext}>Discover the best local resterant near you</Text>
                    </View>
                    <View>
                         <Icon name="star" size={20} color="gold"><Icon name="star" size={70}/><Icon name="star" size={40}/></Icon>
                    </View>
                </View>
                <View style={styles.exp}>
                        <View style={styles.line}></View>
                        <Text style={styles.expText}>WHAT'S ON YOUR MIND?</Text>
                        <View style={styles.line}></View>
                </View>
             <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                <View style={styles.mindCon}>
                         <FlatList data={ListOfMind} 
                            renderItem={({item})=>{
                                    return(
                                    <View style={styles.viewimgCon}>
                                        <Image source={item.image} style={styles.img} />
                                        <Text style={styles.name}>{item.name}</Text>
                                      </View>
                                    );
                            }}
                            horizontal={true}
                            ItemSeparatorComponent={<View style={{height:100,width:20}}></View>}
                            scrollEnabled={false}
                         >
                        </FlatList>
                        <FlatList data={ListOfMind2} 
                            renderItem={({item})=>{
                                    return(
                                    <View style={styles.viewimgCon}>
                                        <Image source={item.image} style={styles.img} />
                                        <Text style={styles.name}>{item.name}</Text>
                                      </View>
                                    );
                            }}
                            horizontal={true}
                            ItemSeparatorComponent={<View style={{height:100,width:20}}></View>}
                            scrollEnabled={false}
                         >
                        </FlatList>
                </View>
             </ScrollView>
             <View style={styles.exp}>
                        <View style={styles.line}></View>
                        <Text style={styles.expText}>ALL RESTAURANTS</Text>
                        <View style={styles.line}></View>
             </View>
             <View style={{marginTop:8}}>
                <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={styles.restarentbtn}>
                        <Icon name="sort" size={15}/>
                        <Text  style={styles.sortName}>Sort</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.restarentbtn}>
                        <Text  style={styles.sortName}>Nearest</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.restarentbtn}>
                        <Text  style={styles.sortName}>Great Offer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.restarentbtn}>
                        <Text  style={styles.sortName}>Rating 4.0+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.restarentbtn}>
                        <Text  style={styles.sortName}>Coupens</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.restarentbtn}>
                        <Text  style={styles.sortName}>ReNew</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.restarentbtn}>
                        <Text  style={styles.sortName}>New Items</Text>
                    </TouchableOpacity>
                </ScrollView>
             </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    restarentbtn:{
        backgroundColor:"white",
        elivation:2,
        width:100,
        height:33,
        alignItems:"center",
        justifyContent:"space-evenly",
        flexDirection:"row",
        borderRadius:8,
        shadowColor:"black",
        shadowRadius:10,
        shadowOpacity:0.6,
        margin:4
    },
    sortName:{
      fontSize:15,
      fontWeight:"400"
    },
    container :{
        flex:1,
        backgroundColor:"#f5f5f5",
        margin:10,
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
        borderRadius:5,
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
    },
    exp:{
        marginTop:30,
        alignItems:"center",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    line: {
        flex: 1,
        backgroundColor:'gainsboro',
        borderWidth:0.1,
      },
    expText:{
        fontSize:13,
        color:"grey",
        marginLeft:15,
        marginRight:15
    },
    expBannerCon:{
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
        justifyContent:"space-around",
        padding:10,
        height:100
    },
    expBannerCol:{
       flex:1,
       flexDirection:"column",
       justifyContent:"space-between"
    },
    banMainHead:{
        fontWeight:"bold",
        fontSize:20,
    },
    banMaitext:{
        width:150,
        color:"grey"
    },
    cont:{
        flex:1,
        flexDirection:"row"
    },
    mindCon:{
         backgroundColor:"white",
         scrollEnabled:true,
         marginTop:10
       
    },
    img:{
        width:90,
        height:90,
        borderRadius:100
    },
    viewimgCon:{
        padding: 10,
        backgroundColor: "white",
        margin: 5 ,
        flex:1,
        alignItems:"center"
    },
    name:{
        marginTop:10,
        color:"grey"
    },

    

})