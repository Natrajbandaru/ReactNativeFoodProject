import { StyleSheet, Text, View } from 'react-native';
//import MainNavigationPrc from './src/NavigationPrc/MainNavigationPrc';
import MainFirstRender from './src/Components/MainFirstRender';
export default function App() {
  return (
    // <MainPage/>

      //  <MainFirstRender/>
    // <AppNavigator/>
    <View style={styles.container}>
    <Text style={styles.text}>Hello, world!</Text>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});
