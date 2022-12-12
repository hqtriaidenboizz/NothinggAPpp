import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
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
import axios from 'axios';
import {BaseURL} from '../assets/data/api';
import {setProduct} from '../redux/slices/productSlice';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const ProductDetail = ({route}) => {
  const products = route.params;
  const product = useSelector(state => state.product.currentProduct);
  // const { id,title, price } = product;
  const dispatch = useDispatch();
  // console.log(product.album);
  // console.log(Object.keys(product).leangth);
  const ListImg = product?.album?.map(img => (
    <View key={img} style={styles.item}>
      <Image style={styles.img} source={{uri: `${img}`}} />
    </View>
  ));

  const getData = () => {
     axios
      .get(`${BaseURL}/${products.id}`)
      .then(res => {
        dispatch(setProduct(res.data));
      })
      .catch(error => console.log(error));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {product == null ? (
        <View>
          <Text>...Loading</Text>
        </View>
      ) : (
        <View style={styles.content}>
          <View style={styles.item}>
            <Image style={styles.img} source={{uri: `${product.mainImage}`}} />
          </View>
          <View
            style={[
              styles.item,
              {
                display: 'flex',
                justifyContent: 'flex-start',
                paddingHorizontal: 10,
              },
            ]}>
            <Text
              style={{
                color: '#000',
                fontWeight: '500',
                fontSize: 11,
                paddingTop: 10,
                textAlign: 'center',
              }}>
              {product.title}
            </Text>
            <Text style={{color: '#000', fontWeight: '600', paddingTop: 10}}>
              ${product.price}
            </Text>
            <Text
              style={{
                color: '#000',
                fontWeight: '500',
                fontSize: 11,
                paddingTop: 30,
                textAlign: 'center',
              }}>
              The 2022 World Cup is continuing to produce shock results. The
              latest is Morocco's defeat of European powerhouse Portugal.
            </Text>
            <Pressable style={{paddingTop: 50, paddingBottom: 5}}>
              <Text
                style={{
                  textAlign: 'center',
                  width: 150,
                  height: 25,
                  color: '#000',
                  fontWeight: '600',
                  fontSize: 11,
                  paddingHorizontal: 45,
                  paddingVertical: 5,
                  borderWidth: 0.5,
                  borderRadius: 90,
                }}>
                Version
              </Text>
            </Pressable>
            <Pressable>
              <Text
                style={{
                  textAlign: 'center',
                  width: 150,
                  height: 25,
                  color: '#000',
                  fontWeight: '600',
                  fontSize: 11,
                  paddingHorizontal: 45,
                  paddingVertical: 5,
                  borderWidth: 0.5,
                  borderRadius: 90,
                }}>
                Add to cart
              </Text>
            </Pressable>
          </View>
          {ListImg}
        </View>
      )}
    </ScrollView>
  );
};
export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  map: {
    width: width,
    height: (height - 70 - 70) / 2,
    borderBottomWidth: 0.7,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  item: {
    width: width / 2,
    height: (height - 70 - 70) / 2,
    // display: flex,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderEndWidth: 0.7,
    borderBottomWidth: 0.7,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
