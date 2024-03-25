import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser } from '@/services/auth';

export const fetchLoginUser = createAsyncThunk(
  'auth/login',
  async (loginData) => {
    const response = await loginUser(loginData);

    localStorage.setItem('token', response.token);
    
    return response;
  }
)

const initialState = {
  login: null,
  status: '',
  error: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLoginUser.pending, (state) => {
      state.status = 'loading'
    });

    builder.addCase(fetchLoginUser.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error?.message ?? 'Internal server error'
    });

    builder.addCase(fetchLoginUser.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.login = action.payload;
    });
  }
});

export default authSlice.reducer;