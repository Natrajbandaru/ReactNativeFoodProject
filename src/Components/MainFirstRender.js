import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import ItemsScreen from './Main/ItemsScreen';
// import MainScreen from './Main/MainScreen';

import MainScreen from './Main/MainScreen';
import ItemsScreen from './Main/ItemsScreen';
import { Text, TextInput } from 'react-native';

export default MainNavigationPrc =()=>{
    const Stack = createNativeStackNavigator();
    return(
          <NavigationContainer options={{
        
          }}>
            <Stack.Navigator  
                  screenOptions={{animation:"fade_from_bottom",
                        // headerStyle:{
                        //       backgroundColor:"red",   
                        // },
                        headerSearchBarOptions: () => (
                              <TextInput
                                style={{ backgroundColor: 'white', padding: 10,borderWidth:2,width:200,height:40,flexDirection:"row" }}
                                placeholder='Search'
                                onChangeText={(text) => {
                                  // Handle text input changes
                                }}
                              />
                            ),
                        headerTitle:""    
                        
               }
            }>
                  <Stack.Screen name='MainScreen' component={MainScreen}  options={{headerShown:false}}></Stack.Screen>
                  <Stack.Screen name='ItemsScreen' component={ItemsScreen}  options={{ headerBackVisible:true}}></Stack.Screen>
            </Stack.Navigator>
          </NavigationContainer>
    );
}
