import { createSelector } from "@reduxjs/toolkit";

export const selectLoading = state => state.contacts.isLoading;

export const selectFilter = state => state.filter;

export const selectAllContacts = state => state.contacts.items;

export const selectModalIsOpen = state => state.contacts.openModal;

export const selectUpdateContactDate = state => state.contacts.dataUpdatedContact









export const selectVisibleContacts = createSelector([selectAllContacts, selectFilter],
    (items, filter) => { const normalizedFilter = filter.toLowerCase(); return items.filter(contact => contact.name.toLowerCase().includes(normalizedFilter)) })