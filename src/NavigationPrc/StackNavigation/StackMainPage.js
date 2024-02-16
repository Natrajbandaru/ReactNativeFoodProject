import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from "./HomeStack";
import StudentStack from "./StudentStack";
export default MainNavigationPrc =()=>{
    const Stack = createNativeStackNavigator();
    return(
            <Stack.Navigator>
                 <Stack.Screen name="HomeStack" component={HomeStack}/>
                 <Stack.Screen name="StudentStack" component={StudentStack}/>
            </Stack.Navigator>
    );
}
