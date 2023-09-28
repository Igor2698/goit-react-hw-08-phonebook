import { createSelector } from "@reduxjs/toolkit";

export const selectLoading = state => state.tasks.loading;

export const selectFilter = state => state.filter;

export const selectAllContacts = state => state.contacts.items;







export const selectVisibleContacts = createSelector([selectAllContacts, selectFilter],
    (items, filter) => { const normalizedFilter = filter.toLowerCase(); return items.filter(contact => contact.name.toLowerCase().includes(normalizedFilter)) })