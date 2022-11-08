import React from 'react';
import Swiper from 'react-native-swiper';
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
  Platform,
} from 'react-native';
import SlideItem from '../components/slideItem';
import data from '../assets/data/data';
const height = Dimensions.get('window').height

export default class Screen extends React.Component {
  render() {
    return (
      <SafeAreaView style={{
        height: (height - 70 - 100),
        backgroundColor:"#fff"
      }}>
         <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      style={styles.container}>
        <StatusBar translucent backgroundColor="transparent"
       barStyle="dark-content" 
       />
        <Swiper style={styles.wrapper} 
     showsButtons = { true }
     autoplay={true}
     autoplayTimeout={2}
     activeDotStyle={{
      display:"none"
     }}
     dotStyle={{
      display:"none"
     }}
     buttonWrapperStyle={{
      display:"none"
     }}>
      <SlideItem  source={require ('../assets/images/tlv1.webp')} />
      <SlideItem source={require ('../assets/images/nlv1.webp')}/>
      <SlideItem  source={require ('../assets/images/alv1.webp')}/>
     </Swiper>
      </ScrollView>
      </SafeAreaView>
     
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    height: "100%"
  },
  wrapper:{
    height: (height - 70 - 100),
    backgroundColor:"#fff"
  },
  typeBtn:{
    width: "100%",
    height: 50,
    flex:1,
    justifyContent: "center",
    alignItems:"center",

  }
})