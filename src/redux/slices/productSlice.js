import {createSlice} from '@reduxjs/toolkit';

const productSlide = createSlice({
  name: 'product',
  initialState: {
    productList: [],
    currentProduct: {}, 
  },
  reducers: {
    setProductList: (state, action) => {
      state.productList = action.payload;
    },
    setProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
  },
});

export const {setProductList, setProduct} = productSlide.actions;
export default productSlide