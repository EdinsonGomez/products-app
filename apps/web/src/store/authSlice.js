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
  login: {
    user: null,
    status: '',
    error: null
  }
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signOff: (state) => {
      localStorage.removeItem('token');

      state.login = {
        user: null,
        status: '',
        error: null
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLoginUser.pending, (state) => {
      state.login = {
        user: null,
        status: 'loading',
        error: null,
      }
    });

    builder.addCase(fetchLoginUser.rejected, (state, action) => {
      const message = action.error?.message ?? 'Internal server error';

      state.login = {
        user: null,
        status: 'failed',
        error: message
      };
    });

    builder.addCase(fetchLoginUser.fulfilled, (state, action) => {
      state.login = {
        user: action.payload,
        status: 'succeeded',
        error: null
      }
    });
  }
});

export const { signOff } = authSlice.actions;

export default authSlice.reducer;