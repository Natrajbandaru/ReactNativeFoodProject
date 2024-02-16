import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import BottomMainNavigation from "./BottomNavigation/BottomMainNavigation";
import StackMainPage from "./StackNavigation/StackMainPage";
export default MainNavigationPrc =()=>{
    
    return(
          <NavigationContainer>
              <StackMainPage/>
          </NavigationContainer>
    );
}
