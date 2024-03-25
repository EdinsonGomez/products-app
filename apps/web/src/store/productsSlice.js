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
  list: [],
  status: '',
  error: null
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = 'loading'
    });

    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.status = 'rejected';
      state.error = action.error?.message ?? 'Internal Server Error'
    });

    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.error = null;
      state.status = 'succeeded';
      state.list = action.payload;
    });
  }
});

export default productsSlice.reducer;