import React from "react";
import { View,Text ,StyleSheet,Image} from "react-native";
import Carousel from 'react-native-snap-carousel';
//import ListOfRestarentPhotos from "./ListOfRestarentPhotos";
import ListOfMind from "./ListOfMind";
export default CardData=()=>{

// const a=[{path:require("../../assets/Photos/food2.jpg")},
//     {path:require("../../assets/Photos/food2.jpg")}];

    return(
        <View style={styles.container}>
      <Carousel
       data={ListOfMind}

     renderItem={({item})=>{
        return(
            <View>
                <Image source={item.image}  style={styles.img}  />
            </View>
        );
     }}
       sliderWidth={300}
       itemWidth={300}
       autoplay={true}
       autoplayInterval={2000}
      />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    item: {
      width: 300,
      height: 200,
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: 'white',
    },
    img:{
        width:250,
        height:250,
    },
  });
  