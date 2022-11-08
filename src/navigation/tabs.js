import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen from '../screens/home';
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
  DatePickerIOS,
} from 'react-native';
import Shop from '../screens/shop';
import Stores from '../screens/stores';
import Bag from '../screens/bag';
import { FlipInEasyX } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();
const Tabs= () =>{
  return (
    <Tab.Navigator
    screenOptions={{
      // position: '',
      // headerTitle:"hhaha",
      header:(props) => <View style={styles.header}>
          <Icon  name='menu' size={20} color="#000"/>
          <Text style={{color: 'black',
        fontSize:24,
        fontWeight:"500"}}>LOUIS VUITTON</Text>
          <Icon  name='search' size={20} color="#000"/>
      </View>,
      // headerShown:false,
      headerShadowVisible: false,
      tabBarShowLabel:false,
      tabBarStyle:{
        borderTopWidth:0.5,
        borderBottomWidth:0.7,
        height:70,
        borderTopColor: "black",
        borderBottomColor: "black",
        backgroundColor:"#fff",
      }
    }}>
      <Tab.Screen options={{
        tabBarItemStyle:{
          backgroundColor:"#fff",
          borderRightWidth:0.7
        },
        headerShadowVisible:false,
        tabBarShowLabel:false,
        tabBarIcon:({focused}) =>(<Text style={focused? styles.activeText : styles.text}>HOME</Text>)}} name='Home' component={Screen}/>
      <Tab.Screen options={{
        tabBarItemStyle:{
          backgroundColor:"#fff",
          borderRightWidth:0.7
        },
        tabBarShowLabel:false,
        tabBarIcon:({focused}) =>(<Text style={focused? styles.activeText : styles.text}>SHOP</Text>)}} name='Shop' component={Shop}/>
      <Tab.Screen options={{
        tabBarItemStyle:{
          backgroundColor:"#fff",
          borderRightWidth:0.7
        },
        tabBarShowLabel:false,
        tabBarIcon:({focused}) =>(<Text style={focused? styles.activeText : styles.text}>STORES</Text>)}} name='Stores' component={Stores}/>
      <Tab.Screen options={{
        tabBarItemStyle:{
          backgroundColor:"#fff"
        },
        tabBarShowLabel:false,
        tabBarIcon:({focused}) =>(<Text style={focused? styles.activeText : styles.text}>BAG</Text>)}} name='Bag' component={Bag}/>

    </Tab.Navigator>
  )
}

export default Tabs;

const styles = StyleSheet.create({
  container: {

  },  
  header:{
   paddingHorizontal: 25,
   paddingTop:30,
    height:100,
    backgroundColor: '#FFFFFF',
    borderBottomWidth:0.8,
    borderBottomColor:"black",
    display:'flex',
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:'center'
  },
  text:{
    fontWeight:"400",
    color:"black"
  },
  activeText:{
    fontWeight:"700",
    color:"black"

  }
})