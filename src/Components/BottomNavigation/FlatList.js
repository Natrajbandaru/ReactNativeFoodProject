import React from "react";
import { FlatList,View,Text,StyleSheet,Image } from "react-native";

export default FlatListData=({Listdata})=>{
    return(
        <FlatList data={Listdata} 
            renderItem={({item})=>{
                    return(
                        <View style={styles.viewimgCon}>
                            <Image source={item.image} style={styles.img} />
                            <Text>{item.name}</Text>
                        </View>
                    );
            }}
            horizontal={true}
            ItemSeparatorComponent={<View style={{height:100,width:20}}></View>}
            scrollEnabled={true}
        >
    </FlatList>

    );
}

const styles=StyleSheet.create({
    img:{
        width:90,
        height:90,
        borderRadius:100
    },
    viewimgCon:{
        padding: 10,
        backgroundColor: "white",
        margin: 5 
    },
})