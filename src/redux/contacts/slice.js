import { createSlice } from '@reduxjs/toolkit';

import { logOut } from 'redux/auth/operations';
import { fetchContacts, addContacts, deleteContact, openModal, editContact } from './operations';

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const contactsSlice = createSlice({
    name: 'tasks',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        openModal: false,
        updateContactId: null,
        dataUpdatedContact: {},
    },
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [addContacts.pending]: handlePending,
        [deleteContact.pending]: handlePending,
        [fetchContacts.rejected]: handleRejected,
        [addContacts.rejected]: handleRejected,
        [deleteContact.rejected]: handleRejected,
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [addContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },
        [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
                task => task.id === action.payload.id
            );
            state.items.splice(index, 1);
        },
        [logOut.fulfilled](state) {
            state.items = [];
            state.error = null;
            state.isLoading = false;
        },
        [openModal.type](state, action) {
            state.openModal = !state.openModal;
            state.updateContactId = action.payload.id;
            state.dataUpdatedContact.name = action.payload.name;
            state.dataUpdatedContact.number = action.payload.number;
            state.dataUpdatedContact.id = action.payload.id;
        },
        [editContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
                contact => contact.id === action.payload.id
            );

            state.items[index].name = action.payload.name;
            state.items[index].number = action.payload.number;

            state.openModal = false;
            state.isLoading = false;
        },

    },
});

export const contactsReducer = contactsSlice.reducer;
