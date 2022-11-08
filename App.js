
import React from "react";

import Tabs from "./src/navigation/tabs";
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
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
  )
}

export default App;