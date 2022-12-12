import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import {BaseURL} from '../assets/data/api';
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
import ProductItem from '../components/productItem';
import data from '../assets/data/data';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

import {useDispatch, useSelector} from 'react-redux';
import {setProductList} from '../redux/slices/productSlice';
const Shop = () => {
  const productList = useSelector(state => state.product.productList);
  const dispacth = useDispatch();
  // const [status,setStatus] = useState('All')

  const getData = () => {
    axios
      .get(`${BaseURL}`)
      .then(res => {
        dispacth(setProductList(res.data));
      })
      .catch(error => console.log(error));
  };
  useEffect(() => {
    getData();
  }, []);
  // const filterCheck = status =>{
  //   if(status !== 'All'){
  //     productList.filter(e => e.status === status)
  //   }else{
  //     productList
  //   }
  //   productList

  // }
  const [checkShow, setCheckShow] = useState(false);
  const check = () => {
    if(checkShow) {
      setCheckShow(false)
    }else {
      setCheckShow(true)
    }
  }
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.typeBtn}>
          <Text style={styles.titleBtn}>NEW IN</Text>
          <Icon
          onPress={check}
            style={styles.option}
            name="options-outline"
            size={20}
            color="black"
          />
        </View>
      </View>
      <View style={{marginBottom: 50}}>
        <FlatList
          style={{marginBottom: 50}}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={productList}
          numColumns={2}
          renderItem={({item}) => <ProductItem data={item} />}
        />
        {!!checkShow &&  <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#fff',
            position: 'absolute',
            top: 0,
          }}>
          <View style={{display:"flex",flexWrap:"wrap",width:width, flexDirection:"row"}}>
            <Pressable   key={1}  style={{width:width/2,height:50,display:"flex",alignItems:"center",justifyContent:"center", borderEndWidth:0.7,borderBottomWidth:0.7}}>
              <Text style={{textAlign:"center",color:"black"}}>New in</Text>
            </Pressable>
            <Pressable key={2} style={{width:width/2,height:50,display:"flex",alignItems:"center",justifyContent:"center", borderEndWidth:0.7,borderBottomWidth:0.7}}>
              <Text style={{textAlign:"center",color:"black"}}>Comming soon</Text>
            </Pressable>
            <Pressable  key={3} style={{width:width/2,height:50,display:"flex",alignItems:"center",justifyContent:"center", borderEndWidth:0.7,borderBottomWidth:0.7}}>
              <Text style={{textAlign:"center",color:"black"}}>Top</Text>
            </Pressable>
            <Pressable key={4} style={{width:width/2,height:50,display:"flex",alignItems:"center",justifyContent:"center", borderEndWidth:0.7,borderBottomWidth:0.7}}>
              <Text style={{textAlign:"center",color:"black"}}>Bottom</Text>
            </Pressable>
            <Pressable  style={{width:width/2,height:50,display:"flex",alignItems:"center",justifyContent:"center", borderEndWidth:0.7,borderBottomWidth:0.7}}>
              <Text style={{textAlign:"center",color:"black"}}>Bags</Text>
            </Pressable>
            <Pressable key={5} style={{width:width/2,height:50,display:"flex",alignItems:"center",justifyContent:"center", borderEndWidth:0.7,borderBottomWidth:0.7}}>
              <Text style={{textAlign:"center",color:"black"}}>Holiday Gifts</Text>
            </Pressable>
            
          </View>
          <View>
          <Pressable style={{width:width,height:50,display:"flex",alignItems:"center",justifyContent:"center", borderEndWidth:0.7,borderBottomWidth:0.7}}>
              <Text style={{textAlign:"center",color:"black"}}>Shop all</Text>
            </Pressable>
          </View>
        </View>}
      </View>
    </View>
  );
};

export default Shop;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  typeBtn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.7,
    borderBottomColor: '#000',
    // marginHorizontal:25
  },
  titleBtn: {
    color: 'black',
    fontWeight: '400',
    fontSize: 15,
  },
  option: {
    position: 'absolute',
    right: 25,
  },
});
