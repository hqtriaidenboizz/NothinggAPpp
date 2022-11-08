import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
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
import Map from "../components/maps";
import MapView from "react-native-maps";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height
const Stores = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.map}>
        <Map />
      </View>
      <View style={styles.content}>
        <View style={styles.item}><Image style={styles.img} source={require('../assets/images/st.webp')} /></View>
        <View style={[styles.item, { display:'flex',justifyContent:"flex-start" }]}><Text style={{ color: "#000", fontWeight: "600", paddingTop:10  }}>Louis Vuitton Shibuya Men’s Store</Text>
          <View style={{ display: "flex", flexDirection: "column", paddingTop:10 }}>
            <Text style={{ color: "#000" , fontWeight: "400"}}>MIYASHITA PARK North, 6-20-10 Jingumae 150-0001 Shibuya-ku, Japan</Text>
            <Text  style={{ color: "#000", fontWeight: "400", paddingTop:10  }}>0120-47-4126</Text>
          </View>
          
        </View>
        {/* <View style={styles.item}><Image style={styles.img} source={require('../assets/images/lvst.webp')} /></View>
        <View style={styles.item}><Text>sadasd</Text></View> */}

      </View>


    </ScrollView>

  )
}
export default Stores;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",

  },
  map: {
    width: width,
    height: (height - 70 - 100) / 2,
    borderBottomWidth: 0.7,
  },
  content: {
    flex: 1,
    flexDirection: "row",
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  item: {
    width: width / 2,
    height: (height - 70 - 100) / 2,
    // display: flex,
    alignItems: 'center',
    justifyContent: "flex-start",
    borderEndWidth: 0.7,
    borderBottomWidth: 0.7,
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: 'cover'
  }
})