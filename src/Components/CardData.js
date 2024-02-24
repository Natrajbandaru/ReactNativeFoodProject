import React, { useState } from "react";
import { View,Text ,StyleSheet,Image,FlatList} from "react-native";
import Carousel from 'react-native-snap-carousel';
import ListOfRestarentPhotos from "./ListOfRestarentPhotos";
import ListOfMind from "./ListOfMind";
import Icon from 'react-native-vector-icons/FontAwesome';

export default CardData=()=>{
    const [autoplayPaused, setAutoplayPaused] = useState(false);

    
  const handleCarouselScroll = () => {
    setAutoplayPaused(true);
  };

  const handleCarouselScrollEnd = () => {
    setAutoplayPaused(true);
  };
 

    return(
        <View style={styles.container}>
                <FlatList data={ListOfRestarentPhotos} 
                    renderItem={({item})=>{
                        return(
                            <View style={styles.cardBody}>
                                 <Carousel
                                    data={item.patharr}
                                    renderItem={({item})=>{
                                        return(
                                            <View>
                                                <Image source={item.path}  style={styles.img}   resizeMode="cover"/>
                                            </View>
                                        );
                                    }}
                                    sliderWidth={380}
                                    itemWidth={380}
                                    autoplay={true}
                                    autoplayInterval={2000}
                                    onScroll={handleCarouselScroll}
                                    onScrollEndDrag={handleCarouselScrollEnd}
                                    />
                                    <View style={{margin:10}}>
                                    <Text style={styles.resturentName}>{item.resturentName}</Text>
                                    <Text style={styles.textOff}>{item.typeFoods}</Text>
                                    <Text style={styles.textOff2}>
                                         <Icon name="clock-o" size={15} color={"green"}/> {item.timeTaken}</Text>
                                    <Text style={styles.offer}>
                                        {item.offer}</Text>
                                    </View>

                                </View> 
                            );
                    }}
                    ItemSeparatorComponent={<View style={{height:10,width:20}}></View>}
                    scrollEnabled={false}
                    >
            </FlatList>
    </View>
    )
}

const styles = StyleSheet.create({
    resturentName:{
       fontWeight:"bold",
       fontSize:20,
       marginBottom:5
    },
    textOff:{
       color:"grey"
    },
    textOff2:{
        color:"grey",
    },
    offer:{
        marginTop:10,
        color:"dodgerblue",
        fontWeight:"700"
    },

    container: {
      flex: 1,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      
    },
    cardBody:{
        backgroundColor:"white",
        flex:1,
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        shadowColor:"black",
        elevation:5,
        shadowRadius:4,
        shadowOpacity:1,
        shadowOffset: { width: 0, height: 5 },
    },
    text: {
      color: 'white',
    },
    img:{
        width:"100%",
        height:250,
        borderTopRightRadius:30,
        borderTopLeftRadius:30        
    },
  });
  