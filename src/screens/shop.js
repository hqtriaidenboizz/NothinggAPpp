import React from "react";
import Icon from 'react-native-vector-icons/Ionicons';
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
import ProductItem from "../components/productItem";
import data from "../assets/data/data";
const Shop = () => {
  return (
    <View style={styles.container}>
      <View >
        <View style={styles.typeBtn}><Text style={styles.titleBtn}>NEW IN</Text>
          <Icon style={styles.option} name="options-outline" size={20} color="black" /></View>
      </View>

        <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={data}
        numColumns={2}
        renderItem={({item}) =>(
          <ProductItem data={item} />
        )}/>

    </View>

  )
}

export default Shop;
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
  option: {
    position: 'absolute',
    right: 25,
  }
})