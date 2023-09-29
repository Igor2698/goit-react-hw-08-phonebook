import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const res = await axios.get('/contacts');

            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


export const addContacts = createAsyncThunk(
    'contacts/addContact',
    async (text, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', text);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);



export const deleteContact = createAsyncThunk(
    'contacts/deleteContacts',
    async (contactID, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactID}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);


export const editContact = createAsyncThunk(
    'contacts/editContacts',
    async ({ id, name, number }, thunkAPI) => {
        try {
            const response = await axios.patch(`/contacts/${id}`, { number, name });

            return response.data;

        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const openModal = createAction('auth/openModal');
export const closeModal = createAction('auth/closeModal');

