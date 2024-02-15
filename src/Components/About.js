import { SafeAreaView,Button,View,ScrollView,Switch,FlatList,Text,StyleSheet,Platform,StatusBar, SectionList, TextInput } from "react-native";
import Teaching from "./Teaching";

import { useNavigation } from '@react-navigation/native';
export default AboutScreen1 = () => {
    const navigation = useNavigation();
  
    const handleTeachingNavigation = () => {
       navigation.navigate(Teaching);
    };
    return (
      <View>
        <Button title="Go to Teaching" onPress={handleTeachingNavigation} />
      </View>
    );
  };

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#f5f5f5",
    paddingTop:StatusBar.currentHeight,
    alignItems:"center",
    justifyContent:"center"
  },
  text:{
    fontSize:24,
    fontWeight:"bold",
    marginBottom:16
  }
  
})


