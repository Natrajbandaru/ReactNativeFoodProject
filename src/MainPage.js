import React from "react";
import { View ,Text,StyleSheet,StatusBar, SafeAreaView,useWindowDimensions,Platform} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import HomeScrren1 from "./Components/Home";
import AboutScreen1 from "./Components/About";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Teaching from "./Components/Teaching";

const heightReduseingStatusBar = Platform.OS === "android" ? StatusBar.currentHeight : 0;
const MainPage=()=>{
     const Tab = createBottomTabNavigator();
     const Stack = createNativeStackNavigator();

    return(
      <NavigationContainer>
          {/* <Stack.Navigator initialRouteName='Home'>
              <Stack.Screen name="Home" component={HomeScrren1} />
              <Stack.Screen name="About" component={AboutScreen1} />
          </Stack.Navigator> */}
          <Tab.Navigator>
              <Tab.Screen name="Home" component={HomeScrren1} />
              <Tab.Screen name="About" component={AboutScreen1} />
          </Tab.Navigator>
      </NavigationContainer>
      

    )
}
const styles= StyleSheet.create({
    container:{
        paddingTop : heightReduseingStatusBar,
        flex:1,
        justifyContent:"space-between",

    }
})

// export default MainPage;
// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from "./Components/Home";
// import About from "./Components/About";
// const Stack = createNativeStackNavigator();

// function MainPage() {
//   return (
//     <NavigationContainer>
//         <Stack.Navigator initialRouteName='About'>
//                 <Stack.Screen name="Home" component={Home} />
//                 <Stack.Screen name="Notifications" component={About} />
//         </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

export default MainPage;