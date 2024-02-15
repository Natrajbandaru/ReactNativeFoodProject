import { SafeAreaView,Button,View,ScrollView,Switch,FlatList,Text,StyleSheet,Platform,StatusBar, SectionList, TextInput } from "react-native";


export default function HomeScrren1(){
    return( 
    <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Home Screen</Text>
    </SafeAreaView>
  );
}

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
  }
  
})


