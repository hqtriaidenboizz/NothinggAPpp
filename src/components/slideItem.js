import React from 'react';
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
width
const SlideItem= (props) =>{
  return (
    <Pressable style={styles.container}>
      <View style={{height:height - 70 - 70}}>
        <Image style={styles.img} source={props.source} />
      </View>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.titleBtn}>Disscover Now </Text>
      </TouchableOpacity>
    </Pressable>
  ) 
}
export default SlideItem;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor:"#fff"
  },

  img:{
    width: "100%",
    height:"100%",
    resizeMode: 'cover'
  }
  ,
  btn:{
    flex:1,
    justifyContent:'center',
    alignItems:"center",
    width: "100%",
    height: 50,
    borderWidth:0.7,
    borderColor: "black",
    position: "absolute",
    bottom: 0,
  },
  titleBtn:{
    color: 'black', fontWeight:"500",fontSize: 15,
  }
})