import { getProducts } from "@/services/products";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await getProducts();

    return response;
  }
)

const initialState = {
  list: {
    data: [],
    status: '',
    error: null
  },
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.list = {
        data: [],
        status: 'loading',
        error: null
      }
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      const error = action.error?.message ?? 'Internal Server Error';

      state.list = {
        error,
        data: [],
        status: 'rejected',
      }
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.list = {
        data: action.payload,
        error: null,
        status: 'succeeded'
      }
    });
  }
});

export default productsSlice.reducer;