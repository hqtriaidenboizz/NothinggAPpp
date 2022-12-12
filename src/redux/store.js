// import React from 'react';
//   import { createStore } from 'redux'
// import { reducers } from './reducers'

// const store = createStore(reducers,{},
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;
import {configureStore} from '@reduxjs/toolkit';
import productSlice from './slices/productSlice';

export default configureStore({
  reducer: {
    product: productSlice.reducer,
  },
});
