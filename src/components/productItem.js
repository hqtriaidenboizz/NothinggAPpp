import React from 'react';
import {useNavigation} from '@react-navigation/native';
import ProductDetail from '../screens/productDetail';
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
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const ProductItem = ({data}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("ProductDetail",data)}>
      <Image
        style={styles.img}
        source={{
          uri: `${data.mainImage}`,
        }}
      />
      <View style={styles.info}>
        <Text style={styles.infoContent}>{data.title}</Text>
        <Text style={styles.infoContent}>${data.price}</Text>
      </View>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    width: width / 2,
    height: (height - 70 - 70 - 50) / 2,
    // display: flex,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderEndWidth: 0.7,
    borderBottomWidth: 0.7,
  },
  img: {
    width: '100%',
    height: '90%',
    resizeMode: 'cover',
  },
  info: {
    position: 'absolute',
    bottom: 5,
    left: 15,
    right: 15,
    lineHeight: 0,
    // backgroundColor:"#fff"
    // marginRight:15,
  },
  infoContent: {
    color: 'black',
    fontSize: 13,
    fontWeight: '500',
  },
});
