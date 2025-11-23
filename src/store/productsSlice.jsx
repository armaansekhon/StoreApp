import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProducts } from '../services/api';

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const response = await fetchProducts();
    return response;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        console.log('Payload:', action.payload);
        state.loading = false;
        state.error = action.error?.message || action.payload || 'Unknown error occurred';
      });
  },
});

export default productsSlice.reducer;