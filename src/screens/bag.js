import React from "react";
import {
  SafeAreaView,
  View,
  StatusBar,
  Text,
  TextInput,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
const width =Dimensions.get('window').width;
const height = Dimensions.get('window').height
const Bag= () =>{
  return (
    <View style={styles.container}>
      <View >
        <View style={styles.typeBtn}>
          <Text style={styles.titleBtn}>YOUR ITEMS</Text>
        </View>
        <ScrollView style={{backgroundColor:"#fff",width:"100%",height:height - 100 -70-50}}>
          <View></View>
        </ScrollView>
        <View style={styles.total}>
          <Text style={styles.titleBtn}>Total</Text>
          <Text style={styles.titleBtn1}>$0</Text>

        </View>
      </View>
    </View>
  )
}
export default Bag;

const styles = StyleSheet.create({
  container: {

    backgroundColor: "#ffffff"
  },
  typeBtn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 0.7,
    borderBottomColor: "#000",
    // marginHorizontal:25
  },
  titleBtn: {
    color: 'black', fontWeight: "400", fontSize: 15,
  },
  titleBtn1:{
    color: 'black', fontWeight: "600", fontSize: 15,

  },
  total:{
    width: "100%",
    height: 50,
    paddingHorizontal:25,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems: "center",
    backgroundColor:"#fff",
    borderTopWidth: 0.7,
    borderBottomWidth: 0.7,
    borderBottomColor: "#000",
    position:'absolute',
    bottom: 0,
  }
})