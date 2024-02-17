import React from "react";
import { StyleSheet,View, Text,StatusBar,Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Delevery from "../BottomNavigation/Delevery";
import Dining from "../BottomNavigation/Dining";
import Money from "../BottomNavigation/Money";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from "react";
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

export default ItemsScreen=()=>{
    const[focusedLabel,setFocusedLabel]= useState(false);
    const Bottom = createBottomTabNavigator();
    return(
       <Bottom.Navigator  screenOptions={{
        tabBarHideOnKeyboard:true,
        // tabBarBackground: () => (
        //     <BlurView tint="light" intensity={100} blurAmount={15}  />
        //   ),
        tabBarStyle:{
            height:60,
            borderTopColor:"transperent"
        }
        
       }}>
           <Bottom.Screen 
              component={Delevery} 
              name="Delevery"
              
               options={{
                tabBarIcon:({focused,color,size})=>{
                    return(
                          <Icon name="motorcycle" size={24} color={focused ? "red": "black"} />
                    )
                },
                tabBarLabel: 'Delivery',
                tabBarLabel: ({ focused, color }) => {
                    let labelStyle = focused ? [styles.tabBarLabel,{color:"red"}] : [styles.tabBarLabel,{ color: 'black' }];
                    return <Text style={labelStyle} >Delevery</Text>;
                },
                headerShown:false
               }}
            />
           <Bottom.Screen name="Dining"    component={Dining}
               options={{
                tabBarIcon:({focused,color,size})=>{
                    return(
                          <Icon name="spoon" size={24} color={focused ? "red": "black"} />
                    )
                },
                tabBarLabel: 'Dining',
                tabBarLabel: ({ focused, color }) => {
                    let labelStyle = focused ? [styles.tabBarLabel,{color:"red"}] : [styles.tabBarLabel,{ color: 'black' }];
                    return <Text style={labelStyle}>Dining</Text>;
                },

               }}
           />
           <Bottom.Screen name="Money"     component={Money}
            options={{
                tabBarIcon:({focused,color,size})=>{
                    return(
                          <Icon name="money" size={24}  color={focused ? "red": "black"} />
                    )
                },
                
                 tabBarLabel: 'Money',
                 tabBarLabel: ({ focused, color }) => {
                    let labelStyle = focused ? [styles.tabBarLabel,{color:"red"}] : [styles.tabBarLabel,{ color: 'black' }];
                    return <Text style={labelStyle}>Money</Text>;
                  },
                
               // tabBarLabelStyle:({focused})=>styles.tabBarLabel
            //    tabBarLabelStyle: ({ focused ,color,size}) => ({
            //             fontSize: 13,
            //             fontWeight: 'bold',
            //             color: focused ? 'red' : 'black',
            //         })
                    
               }}
              
           />
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
      },
    tabBarLabel:{
        fontSize:13,
        fontWeight:"bold",
        color:"black"
    }
})



