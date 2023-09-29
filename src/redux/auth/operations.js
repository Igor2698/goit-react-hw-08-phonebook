import { createAsyncThunk } from "@reduxjs/toolkit";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";


const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};


const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};





export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const res = await axios.post('/users/signup', credentials);
            toast.success(
                `Congratulations, ${res.data.user.name}. You have successfully registered`, { position: "top-center" }
            );




            setAuthHeader(res.data.token);

            return res.data;

        } catch (error) {

            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            const res = await axios.post('/users/login', credentials);

            toast.success(
                `Welcome back, ${res.data.user.name}. `, { position: "top-center" }
            );
            setAuthHeader(res.data.token);

            return res.data;

        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');

        clearAuthHeader();
        toast.info(
            'Are you leaving already? :C  We look forward to your return!', { position: "top-center" }
        );
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});



export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {

        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {

            return thunkAPI.rejectWithValue('Unable to fetch user');
        }

        try {

            setAuthHeader(persistedToken);
            const res = await axios.get('/users/current');

            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);