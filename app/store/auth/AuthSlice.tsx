import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import axios from "axios";
import { toast } from "react-toastify";

interface StateType {
  isAuthenticated: boolean;
  loading: boolean;
}

const initialState: StateType = {
  isAuthenticated: false,
  loading: true,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuthenticated: (state: StateType, action) => {
      state.isAuthenticated = action.payload;
    },
    setLoading: (state: StateType, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setIsAuthenticated, setLoading } =
  AuthSlice.actions;

export const register = (data: any) =>async (dispatch: AppDispatch) => {
  axios.post(process.env.SERVER_API + '/user/register/', data)
  .then((res) => {
    if (res.data.status == 'fail') {
      toast('This user is already in use!', {
        autoClose: 2000,
        type: 'warning',
        theme: 'dark'
      })
    } else {
      toast('Registered successfully!', {
        autoClose: 2000,
        type: 'success',
        theme: 'dark'
      })
      window.location.href = '/login'
    }
  })
  .catch(err => {
    console.log("error => ", err);
  })
}

export const login = (data: any) =>async (dispatch:AppDispatch) => {
  axios.post(process.env.SERVER_API + '/user/login/', data)
  .then((res) => {
    if (res.data.status == 'fail') {
      toast(res.data.msg, {
        autoClose: 2000,
        type: 'warning',
        theme: 'dark'
      })
    } else {
      toast(res.data.msg, {
        autoClose: 2000,
        type: 'success',
        theme: 'dark'
      })
      const currentPath = window.location.toString();
      if (currentPath.includes('stuff-page-login')) {
        window.location.href = process.env.SUB_DOMAIN + '/dashboard?redirect_url=' + res.data.token;
      } else {
        dispatch(setIsAuthenticated(true));
        localStorage.setItem('JWT', res.data.token);
        window.location.href = '/dashboard'      
      }
    }
  })
}

export default AuthSlice.reducer;
