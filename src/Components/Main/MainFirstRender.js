import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ItemsScreen from './ItemsScreen';
import MainScreen from './MainScreen';

export default MainNavigationPrc =()=>{
    const Stack = createNativeStackNavigator();
    return(
          <NavigationContainer>
            <Stack.Navigator>
                  <Stack.Screen name='MainScreen' component={MainScreen}/>
                  <Stack.Screen name='ItemsScreen' component={ItemsScreen}/>
            </Stack.Navigator>
          </NavigationContainer>
    );
}
