import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BottonAbout from "./BottonAbout";
import BottomJersy from "./BottomJersy";
import { Header } from "react-native/Libraries/NewAppScreen";

export default MainNavigationPrc =() =>{
    const Bottom = createBottomTabNavigator();
    return(
            <Bottom.Navigator>
                 <Bottom.Screen name="BottonAbout" component={BottonAbout}  />
                 <Bottom.Screen name="BottomJersy" component={BottomJersy} options={{headerShown: false}}/>
            </Bottom.Navigator>
    );
}
